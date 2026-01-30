'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Calendar, Clock, User } from 'lucide-react';

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const schedule = [
    { day: "Monday", time: "07:00 AM", class: "Morning Yoga", trainer: "Priya Sharma", category: "Yoga" },
    { day: "Monday", time: "06:00 PM", class: "HIIT Blast", trainer: "Rahul Verma", category: "Cardio" },
    { day: "Tuesday", time: "08:00 AM", class: "Power Lift", trainer: "Vikram Singh", category: "Strength" },
    { day: "Tuesday", time: "05:00 PM", class: "Spin Class", trainer: "Rahul Verma", category: "Cardio" },
    { day: "Wednesday", time: "07:00 AM", class: "Pilates Core", trainer: "Priya Sharma", category: "Yoga" },
    { day: "Wednesday", time: "06:30 PM", class: "CrossFit", trainer: "Vikram Singh", category: "Strength" },
    { day: "Thursday", time: "06:00 PM", class: "Boxing", trainer: "Rahul Verma", category: "Cardio" },
    { day: "Friday", time: "07:00 AM", class: "Full Body", trainer: "Vikram Singh", category: "Strength" },
];

export default function ClassesPage() {
    const [activeDay, setActiveDay] = useState("Monday");

    const filteredClasses = schedule.filter(c => c.day === activeDay);

    return (
        <div className="py-24 bg-background min-h-screen">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">CLASS SCHEDULE</h1>
                    <p className="text-muted-foreground">
                        Join our expert-led group sessions. From high-intensity cardio to restorative yoga,
                        we have something for everyone.
                    </p>
                </div>

                {/* Day Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {days.map((day) => (
                        <Button
                            key={day}
                            variant={activeDay === day ? "accent" : "outline"}
                            onClick={() => setActiveDay(day)}
                            className={cn(
                                "min-w-[100px]",
                                activeDay !== day && "bg-transparent hover:bg-accent/10"
                            )}
                        >
                            {day}
                        </Button>
                    ))}
                </div>

                {/* Schedule Grid */}
                <div className="max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeDay}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid gap-4"
                        >
                            {filteredClasses.length > 0 ? (
                                filteredClasses.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-xl border border-border bg-card hover:border-accent transition-colors"
                                    >
                                        <div className="flex flex-col md:flex-row gap-6 md:items-center">
                                            <div className="flex items-center gap-2 text-primary font-bold min-w-[100px]">
                                                <Clock className="w-5 h-5 text-accent" />
                                                {item.time}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold font-heading">{item.class}</h3>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                                    <User className="w-4 h-4" />
                                                    <span>{item.trainer}</span>
                                                    <span className="w-1 h-1 bg-accent rounded-full mx-2" />
                                                    <span className="uppercase text-xs tracking-wider bg-accent/10 text-accent px-2 py-0.5 rounded-sm">{item.category}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Button variant="outline" className="mt-4 md:mt-0 w-full md:w-auto">
                                            Book Spot
                                        </Button>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-12 text-muted-foreground">
                                    <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                    <p>No classes scheduled for {activeDay}. Rest day!</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
