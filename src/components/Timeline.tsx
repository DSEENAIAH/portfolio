import React from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  organization: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
      
      {/* Timeline events */}
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className={`relative pl-12 fade-in-left delay-${index * 100}`}>
            {/* Circle marker */}
            <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-gray-700 border-2 border-purple-500 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            </div>
            
            {/* Content */}
            <div>
              <span className="text-sm text-purple-400 font-medium">{event.year}</span>
              <h4 className="text-lg font-semibold text-white mt-1">{event.title}</h4>
              <p className="text-gray-400 text-sm mt-1">{event.organization}</p>
              <p className="text-gray-300 mt-2">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;