import { Badge } from "./ui/badge";
import Image from "next/image";

type BadgeItem = {
  name: string;
  icon: string;
} | string;

const InfiniteScrollBadges = ({ badges, className = "" }: {badges: BadgeItem[], className?: string}) => {
  const renderBadgeContent = (badge: BadgeItem) => {
    if (typeof badge === 'string') {
      return badge;
    }
    
    return (
      <div className="flex items-center gap-1 sm:gap-1.5">
        <Image 
          src={badge.icon} 
          alt={`${badge.name} logo`} 
          width={16} 
          height={16} 
          className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
        />
        <span className="text-xs sm:text-sm">{badge.name}</span>
      </div>
    );
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scroll-animation {
          animation: scroll 25s linear infinite;
        }
        .scroll-container:hover .scroll-animation {
          animation-play-state: paused;
        }
        @media (max-width: 640px) {
          .scroll-animation {
            animation: scroll 20s linear infinite;
          }
        }
      `}</style>
      <div className="scroll-container">
        <div className="scroll-animation flex gap-1.5 sm:gap-2 w-fit">
          {/* First set of badges */}
          {badges.map((badge, index) => (
            <Badge 
              key={`first-${index}`} 
              variant="secondary" 
              className="bg-secondary/20 text-white border-secondary/30 whitespace-nowrap flex-shrink-0 px-1.5 sm:px-2 py-0.5 sm:py-1"
            >
              {renderBadgeContent(badge)}
            </Badge>
          ))}
          {/* Duplicate set for seamless loop */}
          {badges.map((badge, index) => (
            <Badge 
              key={`second-${index}`} 
              variant="secondary" 
              className="bg-secondary/20 text-white border-secondary/30 whitespace-nowrap flex-shrink-0 px-1.5 sm:px-2 py-0.5 sm:py-1"
            >
              {renderBadgeContent(badge)}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InfiniteScrollBadges;