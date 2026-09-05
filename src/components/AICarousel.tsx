'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';

const images = Array.from({ length: 8 }, (_, index) => ({
  src: `/images/dwc-ai/iamge-${String(index + 1).padStart(2, '0')}.jpeg`,
  alt: `Dadik Wahyu Chang AI - galeri ${index + 1}`,
}));

const loopedImages = [...images, ...images, ...images];
type GalleryImage = (typeof images)[number];

export function AICarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragStartXRef = useRef<number | null>(null);
  const dragStartScrollLeftRef = useRef(0);
  const didDragRef = useRef(false);
  const modalStartXRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const pause = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    setIsPaused(true);
  };

  const resumeAfterInteraction = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => setIsPaused(false), 1800);
  };

  const moveCarousel = (direction: number) => {
    const carousel = carouselRef.current;
    const firstCard = carousel?.querySelector<HTMLElement>('[data-carousel-card]');
    if (!carousel || !firstCard) return;

    pause();
    carousel.scrollBy({ left: direction * (firstCard.offsetWidth + 16), behavior: 'smooth' });
    resumeAfterInteraction();
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    dragStartXRef.current = event.clientX;
    dragStartScrollLeftRef.current = carousel.scrollLeft;
    didDragRef.current = false;
    pause();
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;
    if (!carousel || dragStartXRef.current === null) return;

    const deltaX = event.clientX - dragStartXRef.current;
    if (Math.abs(deltaX) <= 8) return;

    if (!didDragRef.current) {
      didDragRef.current = true;
      carousel.setPointerCapture(event.pointerId);
    }
    carousel.scrollLeft = dragStartScrollLeftRef.current - deltaX;
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;
    if (carousel?.hasPointerCapture(event.pointerId)) carousel.releasePointerCapture(event.pointerId);
    dragStartXRef.current = null;
    resumeAfterInteraction();
  };

  const openImage = (image: GalleryImage) => {
    if (didDragRef.current) {
      didDragRef.current = false;
      return;
    }
    pause();
    setSelectedIndex(images.findIndex(({ src }) => src === image.src));
  };

  const closeModal = () => {
    setSelectedIndex(null);
    resumeAfterInteraction();
  };

  const moveModalImage = (direction: number) => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) return null;
      return (currentIndex + direction + images.length) % images.length;
    });
  };

  const handleModalPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    modalStartXRef.current = event.clientX;
  };

  const handleModalPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (modalStartXRef.current === null) return;
    const deltaX = event.clientX - modalStartXRef.current;
    modalStartXRef.current = null;
    if (Math.abs(deltaX) < 45) return;
    moveModalImage(deltaX < 0 ? 1 : -1);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || isPaused) return;

    const interval = window.setInterval(() => {
      const firstCard = carousel.querySelector<HTMLElement>('[data-carousel-card]');
      if (!firstCard) return;

      const cardStep = firstCard.offsetWidth + 16;
      const middleStart = carousel.scrollWidth / 3;
      const nextOffset = carousel.scrollLeft + cardStep;

      if (nextOffset >= (carousel.scrollWidth * 2) / 3) {
        carousel.scrollTo({ left: middleStart, behavior: 'instant' });
        requestAnimationFrame(() => carousel.scrollBy({ left: cardStep, behavior: 'smooth' }));
      } else {
        carousel.scrollBy({ left: cardStep, behavior: 'smooth' });
      }
    }, 2800);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) carousel.scrollLeft = carousel.scrollWidth / 3;
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (event.key === 'Escape') closeModal();
      if (event.key === 'ArrowLeft') moveModalImage(-1);
      if (event.key === 'ArrowRight') moveModalImage(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  useEffect(() => () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  }, []);

  const selectedImage = selectedIndex === null ? null : images[selectedIndex];

  return (
    <section className="mt-10 min-w-0" aria-label="Galeri pengalaman Dadik Wahyu Chang">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-primary sm:text-sm sm:tracking-[0.2em]">Galeri Pengalaman</p>
          <h3 className="mt-1 text-xl font-black text-foreground sm:text-3xl">Dari pengalaman, jadi insight.</h3>
        </div>
        <p className="max-w-60 text-xs leading-relaxed text-slate-500 sm:text-right">Drag atau swipe gambar. Klik gambar untuk memperbesar.</p>
      </div>

      <div className="relative min-w-0">
        <div
          ref={carouselRef}
          className="flex min-w-0 cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth px-1 pb-3 touch-pan-x select-none active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          tabIndex={0}
          onMouseEnter={pause}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={pause}
          onBlur={() => setIsPaused(false)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {loopedImages.map((image, index) => (
            <button key={`${image.src}-${index}`} type="button" data-carousel-card onClick={() => openImage(image)} className="relative aspect-[4/5] w-[min(72vw,300px)] shrink-0 snap-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 text-left shadow-lg shadow-slate-900/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-[min(38vw,300px)] lg:w-[min(24vw,280px)] xl:w-[min(19vw,260px)]" aria-label={`Buka ${image.alt}`}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 72vw, (max-width: 1024px) 38vw, (max-width: 1280px) 24vw, 19vw" className="pointer-events-none select-none object-cover" draggable={false} priority={index === 8} />
            </button>
          ))}
        </div>

        <button type="button" onClick={() => moveCarousel(-1)} aria-label="Geser galeri ke kiri" className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-md transition hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><ChevronLeft className="h-6 w-6" /></button>
        <button type="button" onClick={() => moveCarousel(1)} aria-label="Geser galeri ke kanan" className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-md transition hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><ChevronRight className="h-6 w-6" /></button>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={selectedImage.alt} onClick={closeModal}>
          <div className="relative flex max-h-[92vh] max-w-[94vw] items-center" onClick={(event) => event.stopPropagation()} onPointerDown={handleModalPointerDown} onPointerUp={handleModalPointerUp}>
            <Image src={selectedImage.src} alt={selectedImage.alt} width={1080} height={1350} className="max-h-[88vh] max-w-[82vw] rounded-2xl object-contain shadow-2xl sm:max-w-[76vw]" priority />
            <button type="button" onClick={() => moveModalImage(-1)} aria-label="Gambar sebelumnya" className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-primary"><ChevronLeft className="h-6 w-6" /></button>
            <button type="button" onClick={() => moveModalImage(1)} aria-label="Gambar berikutnya" className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-primary"><ChevronRight className="h-6 w-6" /></button>
            <button type="button" onClick={closeModal} aria-label="Tutup gambar" className="absolute -right-3 -top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><X className="h-5 w-5" /></button>
          </div>
        </div>
      )}
    </section>
  );
}