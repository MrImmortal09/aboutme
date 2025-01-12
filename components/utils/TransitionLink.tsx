"use client";

import React from 'react'
import Link from 'next/link';
import { LinkProps } from 'next/link';

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
}



export const TransitionLink = ({
    children,
    href,
    ...props
}: TransitionLinkProps ) => {
  return (
    <Link href={href} {...props}>{children}</Link>
  )
}
