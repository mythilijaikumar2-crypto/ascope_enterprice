import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Button,
  IconButton,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Modal,
  Drawer,
  SkeletonText,
  SkeletonCard,
  EmptyState,
  useToast,
  DataTable,
  LineChartWrapper,
  BarChartWrapper,
  PieChartWrapper,
  type Column
} from '@/components/ui';
import {
  sampleTableData,
  sampleLineData,
  sampleBarData,
  samplePieData,
  type SampleRow
} from '@/mocks/design-system';
import {
  Sparkles,
  Layers,
  LayoutGrid,
  FileText,
  TableProperties,
  PieChart,
  MessageSquare,
  Plus,
  Sliders
} from 'lucide-react';
import SEOHead from '@/app/SEOHead';

type TabType = 'buttons' | 'forms' | 'cards' | 'tables' | 'charts' | 'feedback';

interface FormInputs {
  fullName: string;
  email: string;
  role: string;
  bio: string;
  subscribe: boolean;
  terms: boolean;
  gender: string;
  notifications: boolean;
}

export const DesignSystemPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('buttons');
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerSide, setDrawerSide] = useState<'left' | 'right'>('right');
  const [skeletonLoading, setSkeletonLoading] = useState(false);

  const { toast } = useToast();

  // Form setup
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormInputs>({
    defaultValues: {
      fullName: '',
      email: '',
      role: 'developer',
      bio: '',
      subscribe: false,
      terms: false,
      gender: '',
      notifications: true
    }
  });

  const onFormSubmit = async (data: FormInputs) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Submitted Data:', data);
    toast({
      title: "Registration Successful",
      description: `Welcome, ${data.fullName}! Your profile has been created successfully.`,
      variant: "success",
    });
    reset();
  };

  // Toast examples
  const triggerToast = (variant: 'success' | 'error' | 'warning' | 'info') => {
    toast({
      title: `${variant.toUpperCase()} Alert`,
      description: `This is a mockup ${variant} notification pushed dynamically to the stack.`,
      variant,
    });
  };

  // DataTable column definition
  const columns: Column<SampleRow>[] = [
    { header: "ID", accessorKey: "id" },
    { header: "Name", accessorKey: "name", sortable: true },
    { header: "Role", accessorKey: "role", sortable: true },
    {
      header: "Status",
      accessorKey: "status",
      cell: (row) => (
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase ${
            row.status === 'active'
              ? 'bg-success-50 text-success border border-success/20'
              : row.status === 'pending'
              ? 'bg-warning-50 text-warning border border-warning/20'
              : 'bg-neutral-100 text-neutral-500 border border-neutral-200'
          }`}
        >
          {row.status}
        </span>
      )
    },
    {
      header: "Experience",
      accessorKey: "experience",
      sortable: true,
      cell: (row) => `${row.experience} Yrs`
    }
  ];

  return (
    <>
      <SEOHead title="Design System Showcase" description="Living style-guide and showcase for Ascope Tech's premium UI components." />
      
      <div className="py-12 bg-surface/30">
        <div className="app-container space-y-10">
          
          {/* Page Header */}
          <div className="border-b border-border pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-3xl font-display font-extrabold text-neutral-900 tracking-tight">
                Enterprise Design System
              </h1>
              <p className="text-sm text-text-muted">
                Living documentation of shared components, interactive widgets, typography scales, and theme variables.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => triggerToast('info')}
                className="bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-premium-sm transition-all flex items-center gap-1.5"
              >
                <Sparkles className="h-4 w-4" />
                Toast Test
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-border overflow-x-auto gap-2 pb-px scrollbar-none">
            {[
              { id: 'buttons', label: 'Buttons', icon: <Layers className="h-4 w-4" /> },
              { id: 'forms', label: 'Form Controls', icon: <FileText className="h-4 w-4" /> },
              { id: 'cards', label: 'Cards & Feedback', icon: <LayoutGrid className="h-4 w-4" /> },
              { id: 'tables', label: 'Tables & Overlays', icon: <TableProperties className="h-4 w-4" /> },
              { id: 'charts', label: 'Visualizations', icon: <PieChart className="h-4 w-4" /> },
              { id: 'feedback', label: 'Notifications', icon: <MessageSquare className="h-4 w-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center gap-2 px-4 py-3 text-xs font-semibold whitespace-nowrap border-b-2 transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-t-lg ${
                  activeTab === tab.id
                    ? 'border-primary text-primary bg-primary-50/5'
                    : 'border-transparent text-neutral-500 hover:text-neutral-800'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Panels */}
          <div className="min-h-[50vh]">
            
            {/* BUTTONS TAB */}
            {activeTab === 'buttons' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-300">
                <Card>
                  <CardHeader>
                    <CardTitle>Button Variants</CardTitle>
                    <CardDescription>Primary actions, secondary actions, outlines, ghosts, and error states.</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-3">
                    <Button variant="primary">Primary Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button variant="outline">Outline Button</Button>
                    <Button variant="ghost">Ghost Button</Button>
                    <Button variant="destructive">Destructive</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Button Sizes & States</CardTitle>
                    <CardDescription>Small, medium, large sizes, plus loading spinner and disabled states.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <Button size="sm">Small Size</Button>
                      <Button size="md">Medium (Default)</Button>
                      <Button size="lg">Large Size</Button>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 border-t border-neutral-100 pt-4">
                      <Button isLoading>Processing</Button>
                      <Button disabled>Disabled State</Button>
                      <IconButton variant="outline" aria-label="Settings">
                        <Sliders className="h-4 w-4" />
                      </IconButton>
                      <IconButton variant="primary" size="lg" aria-label="Add project">
                        <Plus className="h-5 w-5" />
                      </IconButton>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* FORMS TAB */}
            {activeTab === 'forms' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-300">
                
                {/* Primitive Showcase */}
                <Card className="md:col-span-1">
                  <CardHeader>
                    <CardTitle>Input Primitives</CardTitle>
                    <CardDescription>Clean styled form items including focused and error borders.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-600">Standard Text Input</label>
                      <Input placeholder="Enter username..." />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-600">Error Input State</label>
                      <Input placeholder="Invalid email address" hasError />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-600">Disabled Input</label>
                      <Input placeholder="Locked field" disabled />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-600">Standard Dropdown Select</label>
                      <Select
                        options={[
                          { value: '1', label: 'Select option 1' },
                          { value: '2', label: 'Select option 2' }
                        ]}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Validation Form wrapping React Hook Form */}
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>RHF Form Validation</CardTitle>
                    <CardDescription>A live demonstration of inline field validation, constraints, and success toasts.</CardDescription>
                  </CardHeader>
                  <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
                    <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-neutral-700">Full Name *</label>
                        <Input
                          {...register("fullName", { required: "Full Name is required" })}
                          placeholder="e.g. Arthur Pendragon"
                          hasError={!!errors.fullName}
                        />
                        {errors.fullName && (
                          <p className="text-[10px] text-error font-medium">{errors.fullName.message}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-neutral-700">Email Address *</label>
                        <Input
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address"
                            }
                          })}
                          placeholder="e.g. arthur@camelot.org"
                          type="email"
                          hasError={!!errors.email}
                        />
                        {errors.email && (
                          <p className="text-[10px] text-error font-medium">{errors.email.message}</p>
                        )}
                      </div>

                      {/* Role Dropdown */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-neutral-700">Enterprise Role</label>
                        <Select
                          {...register("role")}
                          options={[
                            { value: 'developer', label: 'Software Engineer' },
                            { value: 'designer', label: 'UI/UX Designer' },
                            { value: 'pm', label: 'Product Manager' },
                            { value: 'hr', label: 'HR Administrator' }
                          ]}
                        />
                      </div>

                      {/* Gender Radio */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-neutral-700">Preferred Pronoun</label>
                        <div className="flex gap-4 pt-1">
                          <Radio
                            {...register("gender")}
                            value="male"
                            label="He/Him"
                          />
                          <Radio
                            {...register("gender")}
                            value="female"
                            label="She/Her"
                          />
                          <Radio
                            {...register("gender")}
                            value="other"
                            label="They/Them"
                          />
                        </div>
                      </div>

                      {/* Bio */}
                      <div className="space-y-1.5 sm:col-span-2">
                        <label className="text-xs font-bold text-neutral-700">Professional Bio</label>
                        <Textarea
                          {...register("bio")}
                          placeholder="Tell us about your background or aspirations..."
                          rows={3}
                        />
                      </div>

                      {/* Switch and Checkboxes */}
                      <div className="sm:col-span-2 flex flex-col gap-3 pt-2">
                        <Controller
                          name="notifications"
                          control={control}
                          render={({ field }) => (
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              label="Enable real-time notification alerts"
                            />
                          )}
                        />

                        <Checkbox
                          {...register("subscribe")}
                          label="Subscribe to Ascope Tech insights and bootcamp course flyers"
                        />

                        <div className="space-y-1">
                          <Checkbox
                            {...register("terms", { required: "You must accept terms to proceed" })}
                            label="I accept the Platform terms of service and licensing rules *"
                            hasError={!!errors.terms}
                          />
                          {errors.terms && (
                            <p className="text-[10px] text-error font-medium">{errors.terms.message}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2 pt-0">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          reset();
                          toast({ title: "Form Cleared", description: "All form states have been reset.", variant: "info" });
                        }}
                      >
                        Reset Form
                      </Button>
                      <Button type="submit" isLoading={isSubmitting}>
                        Register Candidate
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </div>
            )}

            {/* CARDS TAB */}
            {activeTab === 'cards' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Card 1: Default */}
                  <Card variant="default">
                    <CardHeader>
                      <CardTitle>Default Card</CardTitle>
                      <CardDescription>Default borders and soft shadow elevation.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-xs text-neutral-600 leading-relaxed">
                      This card uses the standard color border token, light background surface, and standard responsive micro-hover shadow lifts.
                    </CardContent>
                    <CardFooter>
                      <Button variant="secondary" size="sm">Learn More</Button>
                    </CardFooter>
                  </Card>

                  {/* Card 2: Outline */}
                  <Card variant="outline">
                    <CardHeader>
                      <CardTitle>Outline Variant</CardTitle>
                      <CardDescription>Zero shadow, clean borders.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-xs text-neutral-600 leading-relaxed">
                      Useful for grids or nested blocks. Standard borders, transparent background, and no shadow lifts on user interactions.
                    </CardContent>
                    <CardFooter>
                      <span className="text-[10px] uppercase font-bold text-neutral-400">Documentation</span>
                    </CardFooter>
                  </Card>

                  {/* Card 3: Premium */}
                  <Card variant="premium">
                    <CardHeader>
                      <CardTitle className="text-primary">Premium Card</CardTitle>
                      <CardDescription>Border accents and elevated shadows.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-xs text-neutral-600 leading-relaxed">
                      Featuring brand gradient borders, deep elevations, and micro-translations on hover. Perfect for hero CTAs or plan pricing tiers.
                    </CardContent>
                    <CardFooter>
                      <Button variant="primary" size="sm" className="w-full">
                        Upgrade Account
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                {/* Skeletons and Empty States Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-neutral-800">Shimmer Loaders</h3>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setSkeletonLoading(true);
                          setTimeout(() => setSkeletonLoading(false), 2000);
                        }}
                      >
                        Trigger Loader
                      </Button>
                    </div>
                    {skeletonLoading ? (
                      <div className="space-y-4">
                        <SkeletonCard />
                      </div>
                    ) : (
                      <Card>
                        <CardHeader>
                          <CardTitle>Toggle Skeleton Loader</CardTitle>
                          <CardDescription>Click the button above to simulate async rendering.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <SkeletonText lines={3} />
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <h3 className="text-sm font-bold text-neutral-800 mb-4">Illustrated Fallback Area</h3>
                    <div className="bg-white p-6 border border-border rounded-2xl shadow-premium-sm">
                      <EmptyState
                        title="No candidate resume match found"
                        description="Our AI screening matching engine could not locate profiles corresponding to that parameter search. Revise terms or invite fresh talent."
                        actionText="Search Talent Pool"
                        onAction={() => triggerToast('info')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TABLES TAB */}
            {activeTab === 'tables' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                {/* DataTable Demo */}
                <Card>
                  <CardHeader>
                    <CardTitle>Sortable & Paginated DataTable</CardTitle>
                    <CardDescription>Generically typed table rendering rows, sorting columns dynamically, and paginating results client-side. Shrinks to card-list on mobile.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DataTable
                      data={sampleTableData}
                      columns={columns}
                      pageSize={4}
                      searchKey="name"
                      searchPlaceholder="Search candidates by name..."
                      onRowClick={(row) =>
                        toast({
                          title: `Candidate Selected`,
                          description: `${row.name} has ${row.experience} years of experience in ${row.role}.`,
                          variant: 'info'
                        })
                      }
                    />
                  </CardContent>
                </Card>

                {/* Modals and Drawers Demo */}
                <Card>
                  <CardHeader>
                    <CardTitle>Dialog Panels & Sliders</CardTitle>
                    <CardDescription>Accessible overlays that trap focus, block document scroll, and support close actions.</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-4">
                    <Button onClick={() => setModalOpen(true)}>
                      Open Overlay Modal
                    </Button>
                    <Button variant="outline" onClick={() => { setDrawerSide('right'); setDrawerOpen(true); }}>
                      Slide Drawer (Right)
                    </Button>
                    <Button variant="outline" onClick={() => { setDrawerSide('left'); setDrawerOpen(true); }}>
                      Slide Drawer (Left)
                    </Button>
                  </CardContent>
                </Card>

                {/* Live Overlays */}
                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="System Settings">
                  <div className="space-y-4">
                    <p className="text-xs text-text-muted leading-relaxed">
                      This modal panel traps your Tab focus. Pressing <kbd className="px-1 py-0.5 bg-neutral-100 rounded text-[10px] font-bold">Tab</kbd> or <kbd className="px-1 py-0.5 bg-neutral-100 rounded text-[10px] font-bold">Shift+Tab</kbd> will wrap focus inside. Close this modal using the cross button or pressing <kbd className="px-1 py-0.5 bg-neutral-100 rounded text-[10px] font-bold">ESC</kbd> on your keyboard.
                    </p>
                    <div className="space-y-3">
                      <Input placeholder="Config parameter..." />
                      <Select options={[{ value: 'prod', label: 'Production Environment' }, { value: 'dev', label: 'Development Environment' }]} />
                    </div>
                    <div className="flex justify-end gap-2 border-t border-neutral-100 pt-4">
                      <Button variant="outline" size="sm" onClick={() => setModalOpen(false)}>
                        Cancel
                      </Button>
                      <Button size="sm" onClick={() => { setModalOpen(false); triggerToast('success'); }}>
                        Save Settings
                      </Button>
                    </div>
                  </div>
                </Modal>

                <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} title="Profile Detail" side={drawerSide}>
                  <div className="space-y-6 pt-2">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary text-xl font-bold font-display">
                        SP
                      </div>
                      <h4 className="font-bold text-neutral-800">Sarah Connor</h4>
                      <span className="text-[10px] font-bold bg-success-50 text-success border border-success/20 px-2 py-0.5 rounded-full uppercase">
                        Active Lead
                      </span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="border-t border-neutral-100 pt-3">
                        <span className="font-bold text-neutral-400 block uppercase text-[10px] mb-1">Assigned Role</span>
                        <span className="text-neutral-700 font-medium">Senior Solutions Engineer</span>
                      </div>
                      <div className="border-t border-neutral-100 pt-3">
                        <span className="font-bold text-neutral-400 block uppercase text-[10px] mb-1">Contact Email</span>
                        <span className="text-neutral-700 font-medium">s.connor@cyberdyne.corp</span>
                      </div>
                      <div className="border-t border-neutral-100 pt-3">
                        <span className="font-bold text-neutral-400 block uppercase text-[10px] mb-1">Biography</span>
                        <p className="text-text-muted leading-relaxed">
                          Expert in hardware engineering, systems failure recoveries, and threat preventions in secure datacenters.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 pt-6 mt-auto">
                      <Button size="sm" className="w-full" onClick={() => { setDrawerOpen(false); triggerToast('success'); }}>
                        Approve Candidate
                      </Button>
                      <Button variant="outline" size="sm" className="w-full" onClick={() => setDrawerOpen(false)}>
                        Close Details
                      </Button>
                    </div>
                  </div>
                </Drawer>
              </div>
            )}

            {/* CHARTS TAB */}
            {activeTab === 'charts' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Line Chart */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Enrollment & Recruiting Trends</CardTitle>
                      <CardDescription>Line chart plotting monthly academy students and candidate hires.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <LineChartWrapper
                        data={sampleLineData}
                        xKey="name"
                        series={[
                          { key: 'enrollment', name: 'Student Enrollments', color: '#7c3aed' },
                          { key: 'recruitment', name: 'Recruiter Hires', color: '#06b6d4' }
                        ]}
                      />
                    </CardContent>
                  </Card>

                  {/* Bar Chart */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Department Headcounts</CardTitle>
                      <CardDescription>Bar chart detailing count distributions across company sections.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChartWrapper
                        data={sampleBarData}
                        xKey="name"
                        series={[{ key: 'count', name: 'Active Headcount', color: '#10b981' }]}
                      />
                    </CardContent>
                  </Card>

                  {/* Pie Chart */}
                  <Card className="md:col-span-2 max-w-2xl mx-auto w-full">
                    <CardHeader>
                      <CardTitle>Candidate Pipeline Distribution</CardTitle>
                      <CardDescription>Pie chart plotting active status divisions across the platform.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                      <PieChartWrapper data={samplePieData} />
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* FEEDBACK TAB */}
            {activeTab === 'feedback' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-300">
                <Card>
                  <CardHeader>
                    <CardTitle>Toast Notification Triggers</CardTitle>
                    <CardDescription>Trigger floating alerts stacked in a top-right list with auto-hiding progress bars.</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    <Button variant="primary" onClick={() => triggerToast('success')} className="bg-success hover:bg-success/90">
                      Trigger Success Toast
                    </Button>
                    <Button variant="primary" onClick={() => triggerToast('error')} className="bg-error hover:bg-error/90">
                      Trigger Error Toast
                    </Button>
                    <Button variant="primary" onClick={() => triggerToast('warning')} className="bg-warning hover:bg-warning/90">
                      Trigger Warning Toast
                    </Button>
                    <Button variant="primary" onClick={() => triggerToast('info')} className="bg-info hover:bg-info/90">
                      Trigger Info Toast
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Platform Theme Colors</CardTitle>
                    <CardDescription>Reference colors mapping to custom design tokens.</CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 gap-3 text-xs font-semibold">
                    <div className="flex items-center gap-2.5 p-2.5 border border-border rounded-lg bg-white shadow-premium-sm">
                      <span className="w-6 h-6 rounded bg-primary shrink-0" />
                      <span>Primary (Violet)</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 border border-border rounded-lg bg-white shadow-premium-sm">
                      <span className="w-6 h-6 rounded bg-info shrink-0" />
                      <span>Info (Cyan)</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 border border-border rounded-lg bg-white shadow-premium-sm">
                      <span className="w-6 h-6 rounded bg-success shrink-0" />
                      <span>Success (Green)</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 border border-border rounded-lg bg-white shadow-premium-sm">
                      <span className="w-6 h-6 rounded bg-warning shrink-0" />
                      <span>Warning (Yellow)</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 border border-border rounded-lg bg-white shadow-premium-sm">
                      <span className="w-6 h-6 rounded bg-error shrink-0" />
                      <span>Error (Red)</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 border border-border rounded-lg bg-white shadow-premium-sm">
                      <span className="w-6 h-6 rounded bg-neutral-500 shrink-0" />
                      <span>Neutral (Slate)</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
          </div>

        </div>
      </div>
    </>
  );
};
export default DesignSystemPage;
