"use client";

import { pageCursor } from "@/utils/atom";
import { Button, Typography } from "antd";
import { useAtom } from "jotai";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

export default function FirstPage() {
  const [cursor, setCursor] = useAtom(pageCursor);

  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Typography.Title className="text-center">
            Hi, Salma!
          </Typography.Title>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            className="mx-auto d-block"
            size="large"
            onClick={() => setCursor(cursor + 1)}
          >
            Start to Celebrate!
          </Button>
        </motion.div>
      </div>
    </Container>
  );
}
