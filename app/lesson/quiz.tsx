"use client"

import { useState } from "react";
import { challenges, challengeOptions } from "@/db/schema";
import Header from "./header";

type Props = {
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: typeof challengeOptions.$inferSelect[];
  })[];
  userSubscription: any; // TODO: Replace with subscription DB type
}

const Quiz = ({
  initialPercentage,
  initialHearts,
  initialLessonId,
  initialLessonChallenges,
  userSubscription
}: Props) => {
  const [hearts, useHearts] = useState(initialHearts)
  const [percentage, usePercentage] = useState(initialPercentage)

  return (
    <>
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
    </>
  )
}

export default Quiz
