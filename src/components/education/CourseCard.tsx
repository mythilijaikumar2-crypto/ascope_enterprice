import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Laptop, ArrowRight } from 'lucide-react';
import type { Course } from '@/mocks/courses';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  // Mapping level to semantic theme colors
  const levelColors = {
    Beginner: "bg-success-50 text-success border border-success/20",
    Intermediate: "bg-info-50 text-info border border-info/20",
    Advanced: "bg-primary-50 text-primary border border-primary/20"
  };

  return (
    <Card className="flex flex-col justify-between h-full group hover:border-primary/20 transition-all duration-300">
      <div>
        <CardHeader className="space-y-2">
          {/* Badges bar */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className={cn("text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider", levelColors[course.level])}>
              {course.level}
            </span>
            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-600 uppercase tracking-wider flex items-center gap-1">
              <Clock className="h-3 w-3 shrink-0" />
              {course.duration}
            </span>
            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-600 uppercase tracking-wider flex items-center gap-1">
              <Laptop className="h-3 w-3 shrink-0" />
              {course.mode}
            </span>
          </div>

          <CardTitle className="text-base font-bold text-neutral-900 group-hover:text-primary transition-colors tracking-tight leading-snug">
            <Link to={`/education/courses/${course.slug}`}>
              {course.title}
            </Link>
          </CardTitle>
          <CardDescription className="line-clamp-2 leading-relaxed">
            {course.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex items-center justify-between text-xs pt-1">
          {/* Rating */}
          <div className="flex items-center gap-1.5 text-neutral-600">
            <Star className="h-4 w-4 fill-warning text-warning shrink-0" />
            <span className="font-bold text-neutral-800">{course.rating}</span>
            <span className="text-text-light">({course.enrolledCount} enrolled)</span>
          </div>
          {/* Price */}
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] text-red-500 font-bold px-1.5 py-0.2 rounded bg-red-50 border border-red-100">
                20% OFF
              </span>
              <span className="text-[10px] text-neutral-400 line-through">
                ₹{course.originalPrice ? course.originalPrice.toLocaleString('en-IN') : (course.price * 1.2).toLocaleString('en-IN')}
              </span>
            </div>
            <div className="font-display font-extrabold text-primary text-sm mt-0.5">
              ₹{course.price.toLocaleString('en-IN')}
            </div>
          </div>
        </CardContent>
      </div>

      <CardFooter className="pt-0 flex items-center justify-between border-t border-neutral-50 mt-4">
        <Link
          to={`/education/courses/${course.slug}`}
          className="text-xs font-semibold text-primary flex items-center gap-1 hover:text-primary-hover transition-colors"
        >
          View Details
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link to={`/education/courses/${course.slug}`}>
          <Button size="sm" variant="outline" className="text-xs py-1 h-8">
            Enroll
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
export default CourseCard;
