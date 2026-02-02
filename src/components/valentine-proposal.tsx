"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Is that your final answer?",
    "You're breaking my heart ;(",
];

export default function ValentineProposal() {
    const [noCount, setNoCount] = useState(0);
    const [accepted, setAccepted] = useState(false);

    const yesButtonScale = 1 + noCount * 0.1;

    const handleNoInteraction = () => {
        setNoCount((c) => c + 1);
    };

    const getNoButtonText = () =>
        phrases[Math.min(noCount, phrases.length - 1)];

    if (accepted) {
        return (
            <div className="flex flex-col items-center justify-center h-screen w-full text-center p-6 bg-background text-foreground">
                <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary mb-4">
                    Ok, yay!!!
                </h1>
                <p className="text-xl md:text-2xl">See you on February 14th.</p>
                <Heart
                    className="w-32 h-32 text-primary mx-auto animate-pulse mt-8"
                    fill="currentColor"
                />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full text-center p-6 overflow-hidden bg-background text-foreground">
            <Heart
                className="w-24 h-24 text-primary mb-8 animate-bounce"
                fill="hsl(var(--accent))"
            />
            <h1 className="font-headline text-5xl md:text-7xl font-bold mb-12 text-primary">
                Will you be my Valentine?
            </h1>

            <div className="flex items-center justify-center gap-4">
                <Button
                    className="transition-all duration-300 ease-in-out shadow-xl"
                    style={{
                        transform: `scale(${yesButtonScale})`,
                    }}
                    onClick={() => setAccepted(true)}
                >
                    Yes
                </Button>

                {noCount === 0 && (
                    <Button
                        variant="destructive"
                        className="shadow-xl"
                        onMouseEnter={handleNoInteraction}
                        onClick={handleNoInteraction} // for mobile
                    >
                        {getNoButtonText()}
                    </Button>
                )}

                {noCount > 0 && (
                    <Button
                        variant="destructive"
                        className="absolute transition-all duration-300 ease-out shadow-xl"
                        style={{
                            top: `${Math.random() * 85 + 5}%`,
                            left: `${Math.random() * 85 + 5}%`,
                            transform: "translate(-50%, -50%)",
                        }}
                        onMouseEnter={handleNoInteraction}
                        onClick={handleNoInteraction} // for mobile
                    >
                        {getNoButtonText()}
                    </Button>
                )}
            </div>
        </div>
    );
}
