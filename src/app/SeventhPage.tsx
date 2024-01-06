"use client";

import { pageCursor } from "@/utils/atom";
import { Button, Typography } from "antd";
import { useSetAtom } from "jotai";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

export default function SeventhPage() {
  const setCursor = useSetAtom(pageCursor);
  const [firstClick, setFirstClick] = useState<boolean>(false);
  const [positionButton, setPositionButton] = useState({
    top: "0%",
    left: "0%",
  });

  const handleNope = () => {
    setFirstClick(true);
    const topRandom = Math.floor(Math.random() * 71) + 15;
    const leftRandom = Math.floor(Math.random() * 71) + 15;
    setPositionButton({ top: `${topRandom}%`, left: `${leftRandom}%` });
  };

  return (
    <Container className="vh-100 position-relative d-flex justify-content-center align-items-center">
      <div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Typography.Title level={3} className="text-center my-4">
            Are you very happy with your birthday?
          </Typography.Title>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <Button
            className="mx-auto d-block mt-4 mb-2"
            size="large"
            onClick={() => setCursor(1)}
          >
            Absolutely!
          </Button>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            className="mx-auto d-block mb-4"
            size="large"
            style={
              firstClick
                ? {
                    position: "absolute",
                    top: positionButton.top,
                    left: positionButton.left,
                  }
                : {}
            }
            onClick={handleNope}
          >
            Nope.
          </Button>
        </motion.div>
      </div>
    </Container>
  );
}
