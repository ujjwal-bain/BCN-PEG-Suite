"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { searchData, type SearchItem } from "@/lib/search-data";
import { cn } from "@/lib/utils";

interface SearchDropdownProps {
  className?: string;
  placeholder?: string;
  forceFullWidth?: boolean; // New prop to force full width
}

const toSentenceCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export default function SearchDropdown({ className, placeholder = "Search Suite", forceFullWidth = false }: SearchDropdownProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchItem[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [screenSize, setScreenSize] = useState<"small" | "large">("large");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1200) {
        setScreenSize("small");
      } else {
        setScreenSize("large");
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (query.trim().length > 0) {
      const filtered = searchData.reduce((acc: SearchItem[], item) => {
        const matchingKeywords = item.keywords.filter((keyword) =>
          keyword.toLowerCase().includes(query.toLowerCase())
        );

        if (matchingKeywords.length > 0) {
          return [
            ...acc,
            {
              ...item,
              matchedKeyword: matchingKeywords[0], // Keep original case
              keywords: matchingKeywords,
            },
          ];
        }

        return acc;
      }, []);

      setSuggestions(filtered.slice(0, 6));
      setIsOpen(true);
      setSelectedIndex(-1);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || suggestions.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          handleSuggestionClick(suggestions[selectedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  const handleSuggestionClick = (item: SearchItem) => {
    setQuery("");
    setIsOpen(false);
    setSelectedIndex(-1);

    if (item.section) {
      router.push(item.url);
      setTimeout(() => {
        const element = document.getElementById(item.section!);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      router.push(item.url);
    }
  };

  // Determine if we should use full width layout
  const useFullWidth = screenSize === "small" || forceFullWidth;

  return (
    <div
      ref={searchRef}
      className={cn(
        "relative",
        useFullWidth 
          ? "w-full" 
          : "transition-all duration-300 ease-in-out",
        !useFullWidth && isFocused ? "md:w-[18rem]" : !useFullWidth ? "md:w-48" : "",
        className
      )}
    >
      {/* Large screens with constrained width: Animated search box */}
      {!useFullWidth && (
        <div className={cn("relative transition-[width] duration-300 ease-in-out h-10", isFocused ? "md:w-[18rem]" : "md:w-48")}>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />

          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setIsOpen(false);
                inputRef.current?.focus();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground hover:text-foreground cursor-pointer z-10"
            >
              <X className="h-4 w-4" />
            </button>
          )}

          <Input
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            className="w-full h-10 pl-10 pr-10 rounded-full bg-background/60 text-sm placeholder:text-muted-foreground border-2 border-gray-300 transition-colors"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              setIsFocused(true);
              if (suggestions.length > 0) {
                setIsOpen(true);
              }
            }}
            onBlur={() => {
              setTimeout(() => {
                if (!searchRef.current?.contains(document.activeElement)) {
                  setIsFocused(false);
                  setIsOpen(false);
                }
              }, 100);
            }}
          />
        </div>
      )}

      {/* Full-width search box for small screens or when forced */}
      {useFullWidth && (
        <div className="relative w-full h-10">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setIsOpen(false);
                inputRef.current?.focus();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground hover:text-foreground cursor-pointer z-10"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <Input
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            className="w-full h-10 pl-10 pr-10 rounded-full bg-background text-sm placeholder:text-muted-foreground border-2 border-gray-300"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      )}

      {/* Suggestions */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-background border rounded-md shadow-lg max-h-96 overflow-y-auto">
          {suggestions.map((item, index) => (
            <button
              key={item.id}
              className={cn(
                "w-full px-4 py-3 text-left hover:bg-muted/50 border-b last:border-b-0 transition-colors",
                selectedIndex === index && "bg-muted/50"
              )}
              onClick={() => handleSuggestionClick(item)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">
                    {(item as any).matchedKeyword || item.keywords[0]}
                  </div>
                  {item.section && <div className="text-xs text-muted-foreground mt-1">{item.pageName}</div>}
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0 ml-2" />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}