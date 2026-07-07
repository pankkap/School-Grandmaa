/*
  Sanity Schema Configurations (Reference for Sanity Studio)
  You can copy these definitions to your schemas folder in Sanity Studio.
*/

export const schemas = [
  // 1. Program Schema
  {
    name: 'program',
    title: 'Program',
    type: 'document',
    fields: [
      { name: 'title', title: 'Program Title', type: 'string' },
      { name: 'ageGroup', title: 'Age Group', type: 'string' },
      { name: 'duration', title: 'Duration', type: 'string' },
      { name: 'learningObjectives', title: 'Learning Objectives', type: 'text' },
      { name: 'activities', title: 'Activities', type: 'text' },
      { name: 'image', title: 'Program Image', type: 'image', options: { hotspot: true } },
      { name: 'category', title: 'Category', type: 'string' }
    ]
  },

  // 2. Notice Schema
  {
    name: 'notice',
    title: 'Notice Board',
    type: 'document',
    fields: [
      { name: 'title', title: 'Notice Title', type: 'string' },
      { name: 'content', title: 'Content', type: 'text' },
      { name: 'date', title: 'Date', type: 'date' },
      { name: 'category', title: 'Category', type: 'string' },
      { name: 'isPinned', title: 'Pin Notice', type: 'boolean' },
      { name: 'expiryDate', title: 'Expiry Date', type: 'date' },
      { name: 'attachment', title: 'Attachment File', type: 'file' }
    ]
  },

  // 3. Event Schema
  {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
      { name: 'title', title: 'Event Title', type: 'string' },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'date', title: 'Event Date', type: 'date' },
      { name: 'time', title: 'Time Range', type: 'string' },
      { name: 'location', title: 'Location', type: 'string' },
      { name: 'banner', title: 'Event Banner', type: 'image', options: { hotspot: true } },
      { name: 'registrationLink', title: 'Registration Link (URL)', type: 'url' },
      { name: 'countdownTarget', title: 'Countdown Date-Time', type: 'datetime' }
    ]
  },

  // 4. Gallery Schema
  {
    name: 'gallery',
    title: 'Photo Gallery',
    type: 'document',
    fields: [
      { name: 'title', title: 'Image Title', type: 'string' },
      { name: 'description', title: 'Description', type: 'string' },
      { name: 'url', title: 'Image File', type: 'image', options: { hotspot: true } },
      { name: 'category', title: 'Category', type: 'string' },
      { name: 'date', title: 'Upload Date', type: 'date' }
    ]
  },

  // 5. Video Schema
  {
    name: 'video',
    title: 'Video Gallery',
    type: 'document',
    fields: [
      { name: 'title', title: 'Video Title', type: 'string' },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'youtubeUrl', title: 'YouTube URL', type: 'url' },
      { name: 'category', title: 'Category', type: 'string' },
      { name: 'date', title: 'Upload Date', type: 'date' }
    ]
  },

  // 6. Faculty Schema
  {
    name: 'faculty',
    title: 'Faculty',
    type: 'document',
    fields: [
      { name: 'name', title: 'Full Name', type: 'string' },
      { name: 'role', title: 'Role/Designation', type: 'string' },
      { name: 'qualification', title: 'Qualification', type: 'string' },
      { name: 'experience', title: 'Experience', type: 'string' },
      { name: 'subject', title: 'Subject Expertise', type: 'string' },
      { name: 'bio', title: 'Biography', type: 'text' },
      { name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } },
      {
        name: 'socialLinks',
        title: 'Social Media Links',
        type: 'object',
        fields: [
          { name: 'facebook', title: 'Facebook URL', type: 'url' },
          { name: 'instagram', title: 'Instagram URL', type: 'url' },
          { name: 'linkedin', title: 'LinkedIn URL', type: 'url' }
        ]
      }
    ]
  },

  // 7. Testimonial Schema
  {
    name: 'testimonial',
    title: 'Parent Testimonial',
    type: 'document',
    fields: [
      { name: 'parentName', title: 'Parent Name', type: 'string' },
      { name: 'childName', title: 'Child Name & Class', type: 'string' },
      { name: 'rating', title: 'Rating (1-5 Stars)', type: 'number', validation: Rule => Rule.min(1).max(5) },
      { name: 'comment', title: 'Review Comment', type: 'text' },
      { name: 'parentPhoto', title: 'Parent Photo', type: 'image', options: { hotspot: true } }
    ]
  },

  // 8. Download Schema
  {
    name: 'download',
    title: 'Downloadable Document',
    type: 'document',
    fields: [
      { name: 'title', title: 'Document Title', type: 'string' },
      { name: 'description', title: 'Description', type: 'string' },
      { name: 'file', title: 'PDF File Upload', type: 'file' },
      { name: 'category', title: 'Category', type: 'string' }
    ]
  }
];
