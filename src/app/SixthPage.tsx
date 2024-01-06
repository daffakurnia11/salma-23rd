import { pageCursor } from "@/utils/atom";
import { Button, Card, Typography } from "antd";
import { useAtom } from "jotai";
import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const voucher = [
  "One Trip to Gartenhütte",
  "2x Free Seblak",
  "1x Grooming for Atulatul",
  "1x Free Sushi",
  "1x Treat in Coffeshop",
  "1x Free Steak",
];

export default function SixthPage() {
  const [cursor, setCursor] = useAtom(pageCursor);

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Typography.Title level={3} className="text-center my-4">
            VOUCHERS FOR SALMA!
          </Typography.Title>
        </motion.div>
        <motion.div
          className="rounded-circle mx-auto my-4"
          style={{ width: 200, height: 200, overflow: "hidden" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Image
            src={"/voucher-photo.jpeg"}
            width={200}
            height={500}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              transform: "translateY(-70px) translateX(5px) scale(1.2)",
            }}
            alt="Salma's Photo"
          />
        </motion.div>
        {voucher.map((value: string, key: number) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: key * 0.3 + 0.5 }}
          >
            <Card
              style={{ maxWidth: 500, borderColor: "pink" }}
              className="mb-3"
            >
              <Typography.Paragraph className="text-center mb-0">
                <strong>{value}</strong>
              </Typography.Paragraph>
            </Card>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <Typography.Paragraph className="text-center my-0">
            <em>Valid until your next birthday</em>
          </Typography.Paragraph>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button
            className="mx-auto d-block my-4"
            size="large"
            onClick={() => setCursor(cursor + 1)}
          >
            Thank you so much!
          </Button>
        </motion.div>
      </div>
    </Container>
  );
}
