import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  ArrowLeft,
  Share2,
  Layers,
  Clock,
  Star,
  CheckCircle2,
  Laptop
} from 'lucide-react';
import { mockCourses } from '@/mocks/courses';
import { mockTrainers } from '@/mocks/trainers';
import { CourseCurriculumAccordion } from '@/components/education/CourseCurriculumAccordion';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Modal,
  Input,
  useToast
} from '@/components/ui';
import SEOHead from '@/app/SEOHead';
import { cn } from '@/lib/utils';

interface EnrollInputs {
  name: string;
  email: string;
  phone: string;
}

export const CourseDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'syllabus' | 'faq' | 'reviews'>('syllabus');
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  // Retrieve course record
  const course = useMemo(() => {
    return mockCourses.find((c) => c.slug === slug);
  }, [slug]);

  // Retrieve trainer
  const trainer = useMemo(() => {
    if (!course) return null;
    return mockTrainers.find((t) => t.id === course.trainerId);
  }, [course]);

  // Lead capture Form hooks
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<EnrollInputs>({
    defaultValues: { name: '', email: '', phone: '' }
  });

  if (!course) {
    // Redirect to 404 if course not found
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-neutral-800">Course Not Found</h2>
        <p className="text-xs text-text-muted">The requested course catalog path does not exist.</p>
        <Link to="/education/courses" className="text-xs font-bold text-primary">
          Back to Courses
        </Link>
      </div>
    );
  }

  // Copy Course Link share handler
  const handleShareLink = () => {
    const pageUrl = window.location.href;
    navigator.clipboard.writeText(pageUrl);
    toast({
      title: "Link Copied",
      description: "Course registration link has been copied to your clipboard.",
      variant: "success"
    });
  };

  // Submit Lead Inquire Handler
  const onSubmitInquiry = async (data: EnrollInputs) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Enrollment inquiry for:', course.title, data);
    toast({
      title: "Inquiry Received",
      description: `Thank you, ${data.name}. An admissions advisor will contact you within 24 hours.`,
      variant: "success"
    });
    setIsEnrollModalOpen(false);
    reset();
  };

  return (
    <>
      <SEOHead title={`${course.title} Details`} description={course.description} />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-5xl space-y-8 animate-in fade-in duration-300">
          
          {/* Back link */}
          <div className="flex items-center justify-between">
            <Link to="/education/courses" className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Catalog
            </Link>

            <button
              onClick={handleShareLink}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-primary transition-colors border border-border bg-white px-3 py-1.5 rounded-xl shadow-premium-sm"
            >
              <Share2 className="h-3.5 w-3.5" />
              Share Course
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Main Course Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-3">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary-50 text-primary border border-primary/10 uppercase tracking-wider">
                  {course.categoryName}
                </span>
                <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 tracking-tight leading-tight">
                  {course.title}
                </h1>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {course.longDescription}
                </p>
              </div>

              {/* Course Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 border border-border bg-white rounded-2xl shadow-premium-sm text-center">
                <div className="space-y-1">
                  <span className="text-[10px] text-text-light font-bold uppercase tracking-wider block">Duration</span>
                  <div className="flex items-center justify-center gap-1.5 text-neutral-800 font-bold text-xs">
                    <Clock className="h-4 w-4 text-primary shrink-0" />
                    {course.duration}
                  </div>
                </div>
                <div className="space-y-1 border-l border-neutral-100">
                  <span className="text-[10px] text-text-light font-bold uppercase tracking-wider block">Study Mode</span>
                  <div className="flex items-center justify-center gap-1.5 text-neutral-800 font-bold text-xs">
                    <Laptop className="h-4 w-4 text-info shrink-0" />
                    {course.mode}
                  </div>
                </div>
                <div className="space-y-1 border-l border-neutral-100">
                  <span className="text-[10px] text-text-light font-bold uppercase tracking-wider block">Course Level</span>
                  <div className="flex items-center justify-center gap-1.5 text-neutral-800 font-bold text-xs">
                    <Layers className="h-4 w-4 text-success shrink-0" />
                    {course.level}
                  </div>
                </div>
                <div className="space-y-1 border-l border-neutral-100">
                  <span className="text-[10px] text-text-light font-bold uppercase tracking-wider block">Rating</span>
                  <div className="flex items-center justify-center gap-1.5 text-neutral-800 font-bold text-xs">
                    <Star className="h-4 w-4 fill-warning text-warning shrink-0" />
                    {course.rating} / 5.0
                  </div>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="border-b border-border flex gap-2">
                <button
                  onClick={() => setActiveTab('syllabus')}
                  className={cn(
                    "px-4 py-2.5 text-xs font-semibold border-b-2 transition-all outline-none",
                    activeTab === 'syllabus' ? "border-primary text-primary" : "border-transparent text-neutral-500 hover:text-neutral-800"
                  )}
                >
                  Curriculum Modules
                </button>
                <button
                  onClick={() => setActiveTab('faq')}
                  className={cn(
                    "px-4 py-2.5 text-xs font-semibold border-b-2 transition-all outline-none",
                    activeTab === 'faq' ? "border-primary text-primary" : "border-transparent text-neutral-500 hover:text-neutral-800"
                  )}
                >
                  Course FAQ
                </button>
              </div>

              {/* Tab Outputs */}
              <div className="pt-2">
                {activeTab === 'syllabus' && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-neutral-800">Syllabus Curriculum Modules</h3>
                    <CourseCurriculumAccordion syllabus={course.syllabus} />
                  </div>
                )}

                {activeTab === 'faq' && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-neutral-800">Frequently Asked Questions</h3>
                    {course.faqs.length === 0 ? (
                      <p className="text-xs text-text-light italic">No FAQs loaded for this bootcamp.</p>
                    ) : (
                      <div className="space-y-4">
                        {course.faqs.map((faq, fIdx) => (
                          <div key={fIdx} className="p-4 border border-border bg-white rounded-xl space-y-1.5 shadow-premium-sm">
                            <h4 className="text-xs font-bold text-neutral-900">{faq.question}</h4>
                            <p className="text-xs text-text-muted leading-relaxed">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

            </div>

            {/* Sidebar Enrollment Card */}
            <div className="space-y-6">
              <Card variant="premium">
                <CardHeader>
                  <CardTitle className="text-3xl font-display font-extrabold text-neutral-900">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-red-500 font-bold px-2 py-0.5 rounded bg-red-50 border border-red-100">
                          20% OFF
                        </span>
                        <span className="text-sm text-neutral-400 line-through font-normal">
                          ₹{course.originalPrice ? course.originalPrice.toLocaleString('en-IN') : (course.price * 1.2).toLocaleString('en-IN')}
                        </span>
                      </div>
                      <span className="text-primary">
                        ₹{course.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </CardTitle>
                  <CardDescription>All study resources, workspace certificates, and placement accesses included.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button onClick={() => setIsEnrollModalOpen(true)} className="w-full">
                    Enroll in Bootcamp
                  </Button>
                  <ul className="space-y-2.5 text-xs text-neutral-700 font-medium">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Dedicated Slack community channel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>One-on-one developer mentorship reviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Job placement network linkages</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Instructor Card */}
              {trainer && (
                <Card>
                  <CardContent className="p-5 space-y-4">
                    <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Bootcamp Lead Instructor</h4>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center font-bold text-xs text-primary font-display">
                        {trainer.avatar}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-neutral-900 leading-none">{trainer.name}</h4>
                        <p className="text-[10px] text-text-muted mt-1 leading-none">{trainer.role}</p>
                      </div>
                    </div>
                    <p className="text-[11px] text-text-muted leading-relaxed">{trainer.bio}</p>
                  </CardContent>
                </Card>
              )}
            </div>

          </div>

        </div>
      </div>

      {/* Enrollment lead capture modal */}
      <Modal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        title="Bootcamp Registration"
      >
        <form onSubmit={handleSubmit(onSubmitInquiry)} className="space-y-4 pt-2">
          <p className="text-xs text-text-muted">
            Provide details to submit your enrollment inquiry for <strong className="text-neutral-800">{course.title}</strong>. An advisor will reach out.
          </p>

          <div className="space-y-1.5">
            <label htmlFor="enroll-name" className="text-[10px] font-bold text-neutral-700">Your Full Name *</label>
            <Input
              id="enroll-name"
              placeholder="e.g. John Watson"
              hasError={!!errors.name}
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="text-[9px] text-error font-medium">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="enroll-email" className="text-[10px] font-bold text-neutral-700">Email Address *</label>
            <Input
              id="enroll-email"
              type="email"
              placeholder="e.g. john.watson@bakerstreet.com"
              hasError={!!errors.email}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && (
              <p className="text-[9px] text-error font-medium">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="enroll-phone" className="text-[10px] font-bold text-neutral-700">Phone Number *</label>
            <Input
              id="enroll-phone"
              placeholder="e.g. +1 555 1234"
              hasError={!!errors.phone}
              {...register('phone', { required: 'Phone number is required' })}
            />
            {errors.phone && (
              <p className="text-[9px] text-error font-medium">{errors.phone.message}</p>
            )}
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-neutral-100">
            <Button type="button" variant="outline" size="sm" onClick={() => setIsEnrollModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" size="sm" isLoading={isSubmitting}>
              Submit Registration
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};
export default CourseDetailPage;
