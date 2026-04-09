"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react';

const MediaItem = ({ item, className, onClick }) => {
    return (
        <img
            src={item.url}
            alt={item.title}
            className={`${className} object-cover cursor-pointer`}
            onClick={onClick}
            loading="lazy"
            decoding="async"
        />
    );
};

const GalleryModal = ({ selectedItem, isOpen, onClose, setSelectedItem, mediaItems }) => {
    const [dockPosition, setDockPosition] = useState({ x: 0, y: 0 });

    if (!isOpen) return null;

    return (
        <>
            <motion.div
                initial={{ scale: 0.98 }} animate={{ scale: 1 }} exit={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="fixed inset-0 w-full min-h-screen sm:h-[90vh] md:h-[600px] backdrop-blur-3xl bg-black/80 rounded-none sm:rounded-lg md:rounded-xl overflow-hidden z-50 flex items-center justify-center p-4"
            >
                <button
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/30 z-50 transition-colors"
                    onClick={onClose}
                >
                    <X className='w-6 h-6' />
                </button>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedItem.id}
                        className="relative w-full aspect-[16/9] max-w-4xl h-auto max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        initial={{ y: 20, scale: 0.97, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1, transition: { type: "spring", stiffness: 500, damping: 30 } }}
                        exit={{ y: 20, scale: 0.97, opacity: 0 }}
                    >
                        <MediaItem item={selectedItem} className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                            <h3 className="text-white text-2xl font-bold font-display tracking-wide">{selectedItem.title}</h3>
                            <p className="text-white/80 text-sm mt-2">{selectedItem.desc}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            {/* Draggable Dock */}
            <motion.div
                drag dragMomentum={false} dragElastic={0.1} initial={false}
                animate={{ x: dockPosition.x, y: dockPosition.y }}
                onDragEnd={(_, info) => {
                    setDockPosition(prev => ({ x: prev.x + info.offset.x, y: prev.y + info.offset.y }));
                }}
                className="fixed z-[60] left-1/2 bottom-8 -translate-x-1/2 touch-none"
            >
                <motion.div className="relative rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 shadow-2xl cursor-grab active:cursor-grabbing p-3">
                    <div className="flex items-center gap-3">
                        {mediaItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                onClick={(e) => { e.stopPropagation(); setSelectedItem(item); }}
                                className={`relative group w-14 h-14 rounded-xl overflow-hidden cursor-pointer ${selectedItem.id === item.id ? 'ring-2 ring-gym-green shadow-[0_0_15px_rgba(56,211,159,0.5)]' : 'hover:ring-2 hover:ring-white/30'}`}
                                animate={{
                                    scale: selectedItem.id === item.id ? 1.1 : 1,
                                    y: selectedItem.id === item.id ? -10 : 0,
                                }}
                                whileHover={{ scale: 1.2, y: -10 }}
                            >
                                <MediaItem item={item} className="w-full h-full" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};

export const InteractiveBentoGallery = ({ mediaItems }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [items, setItems] = useState(mediaItems);
    const [isDragging, setIsDragging] = useState(false);

    return (
        <div className="w-full">
            <AnimatePresence mode="wait">
                {selectedItem ? (
                    <GalleryModal
                        selectedItem={selectedItem}
                        isOpen={true}
                        onClose={() => setSelectedItem(null)}
                        setSelectedItem={setSelectedItem}
                        mediaItems={items}
                    />
                ) : (
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[120px]"
                        initial="hidden" animate="visible" exit="hidden"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                    >
                        {items.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layoutId={`media-${item.id}`}
                                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${item.span || ''}`}
                                onClick={() => !isDragging && setSelectedItem(item)}
                                variants={{
                                    hidden: { y: 50, scale: 0.9, opacity: 0 },
                                    visible: { y: 0, scale: 1, opacity: 1, transition: { type: "spring", stiffness: 350, damping: 25 } }
                                }}
                                whileHover={{ scale: 0.98 }}
                            >
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <MediaItem item={item} className="absolute inset-0 w-full h-full transform transition-transform duration-700 group-hover:scale-110" />
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
