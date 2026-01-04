/* eslint-disable @next/next/no-img-element */
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";

// Mock next/image for tests
vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    const { src, alt, ...rest } = props;
    // Render a basic img element; drop non-img props like `fill`
    return <img src={src as string} alt={alt as string} {...rest} />;
  },
}));

// Mock framer-motion to render children without animation overhead
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...rest }: Record<string, unknown>) => {
      const {
        whileInView: _whileInView,
        viewport: _viewport,
        transition: _transition,
        variants: _variants,
        initial: _initial,
        animate: _animate,
        ...cleanRest
      } = rest;
      return <div {...cleanRest}>{children as React.ReactNode}</div>;
    },
  },
  AnimatePresence: ({ children }: Record<string, unknown>) => <>{children}</>,
}));

// Mock Lucide icons - return all possible icons as generic components
vi.mock("lucide-react", () => {
  const IconComponent = () => <span>Icon</span>;
  return new Proxy(
    {},
    {
      get: () => IconComponent,
    },
  );
});

import Home from "../app/page";

describe("Home page", () => {
  it("renders hero content and nav anchors", () => {
    render(<Home />);

    expect(screen.getAllByText(/Frontend Engineer/i)[0]).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /^Projects$/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Skills/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Contact/i })).toBeInTheDocument();
  });

  it("renders featured projects section", () => {
    render(<Home />);
    expect(screen.getByText(/Featured work/i)).toBeInTheDocument();
  });
});
