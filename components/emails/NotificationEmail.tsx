import React from "react";
import { Body, Container, Head, Tailwind, Heading, Html, Text, Button } from "@react-email/components";

interface NotificationEmailProps {
  message: string;
}

const baseUrl = process.env.BASE_URL ? `https://${process.env.BASE_URL}` : "";

export const NotificationEmail = ({ message }: NotificationEmailProps) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className="mx-auto bg-white font-sans">
        <Container className="rounded-lg  p-8 shadow-lg">
          <Heading className="pt-4 text-xl">🫶 Hello There 🫶</Heading>
          <Text className="text-lg font-medium text-gray-700 ">Thanks for Joining this community. You currently have {message}.</Text>
          {/* <Button href={`${baseUrl}/api/email/${message}`} className="rounded-md bg-purple-700 px-4 py-6 font-bold text-white">
            Activate Account
          </Button> */}
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default NotificationEmail;
