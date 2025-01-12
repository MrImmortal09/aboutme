"use client"

import React, { useState } from "react";
import useMousePosition from '../components/utils/useMousePosition';
import { motion } from "framer-motion";
import styles from "./page.module.scss";
import Link from "next/link";

interface MaskedElementProps {
  children: React.ReactNode;
}

interface MousePosition {
  x: number;
  y: number;
}

const MaskedElement: React.FC<MaskedElementProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { x , y }: MousePosition = useMousePosition();
  const size: number = isHovered ? 300 : 30;

  return (
    <motion.div
      className={styles.mask}
      animate={{
        WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
    >
      <div 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <div>
      <main className={styles.main} >
        <MaskedElement>
          <p>
          Myself Om Swami.
          </p>
        </MaskedElement>

        <div className={styles.body}>
          <p>
            Myself <span>Om Swami</span>.
          </p>
          
        
        </div>

      </main>
      
    </div>
  );
}