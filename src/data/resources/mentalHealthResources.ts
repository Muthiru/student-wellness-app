export interface Resource {
  id: number;
  title: string;
  description: string;
  category: 'Stress' | 'Sleep' | 'Anxiety' | 'Depression' | 'Mindfulness' | 'Relationships' | 'Study' | 'General';
  content: string;
  source: string;
  sourceUrl?: string;
  tags: string[];
  timeToRead: string;
  imageUrl?: string;
}

export const resources: Resource[] = [
  {
    id: 1,
    title: 'Understanding and Managing Exam Anxiety',
    description: 'Learn effective techniques to manage stress before and during exams',
    category: 'Stress',
    content: `
      Exam anxiety affects many students and can significantly impact performance. Here are research-backed strategies to help:
      
      ##Before the Exam
      - Create a realistic study schedule with breaks
      - Practice deep breathing exercises daily (5 minutes minimum)
      - Maintain healthy sleep and eating habits
      - Use visualization techniques imagining successful completion
      
      ## During the Exam
      - Focus on one question at a time
      - Practice "grounding" when feeling overwhelmed (notice 5 things you can see, 4 things you can touch, etc.)
      - Use positive self-talk to counter negative thoughts
      - Take slow, deep breaths if panic starts to rise
      
      ## After the Exam
      - Avoid immediate post-exam analysis with peers
      - Schedule something enjoyable as a reward
      - Practice self-compassion regardless of performance
      
      Remember that some anxiety is normal and can even enhance performance when managed properly.
    `,
    source: 'University Counseling Center',
    sourceUrl: 'https://www.studentcounseling.org/exam-anxiety',
    tags: ['exams', 'anxiety', 'stress management', 'performance'],
    timeToRead: '6 min'
  },
  {
    id: 2,
    title: 'Sleep Hygiene for Better Mental Health',
    description: 'Evidence-based practices to improve your sleep quality as a student',
    category: 'Sleep',
    content: `
      Quality sleep is one of the most important factors for mental health and academic success. Poor sleep can affect mood, cognition, and immune function.
      
      ## Sleep Hygiene Practices
      
      ### Environment
      - Keep your bedroom dark, quiet, and cool (65-68°F/18-20°C is ideal)
      - Use your bed only for sleep and intimacy, not studying or entertainment
      - Consider blackout curtains, white noise machines, or earplugs if needed
      
      ### Routine
      - Go to bed and wake up at consistent times, even on weekends
      - Create a 30-minute wind-down routine before bed (reading, stretching, etc.)
      - Avoid screens 1 hour before bedtime due to blue light effects on melatonin
      
      ### Habits
      - Limit caffeine after noon and alcohol within 3 hours of bedtime
      - Exercise regularly, but not within 2 hours of sleep
      - Avoid large meals before bed
      
      ### When You Can't Sleep
      - If you can't fall asleep within 20 minutes, get up and do something relaxing
      - Keep a notepad by your bed to write down worries or thoughts
      - Practice progressive muscle relaxation or guided imagery
      
      If sleep problems persist despite good sleep hygiene, consider speaking with a healthcare provider.
    `,
    source: 'National Sleep Foundation',
    sourceUrl: 'https://www.sleepfoundation.org',
    tags: ['sleep', 'habits', 'rest', 'health'],
    timeToRead: '7 min',
    imageUrl: 'https://images.unsplash.com/photo-1531353826977-0941b4779a1c'
  },
  {
    id: 3,
    title: '5-Minute Mindfulness Practices for Busy Students',
    description: 'Quick mindfulness exercises that fit into any schedule',
    category: 'Mindfulness',
    content: `
      Mindfulness doesn't require long meditation sessions. These 5-minute practices can be incorporated throughout your day:
      
      ## 1. Mindful Breathing
      - Sit comfortably and close your eyes (or maintain a soft gaze)
      - Focus on your natural breathing pattern
      - When your mind wanders, gently bring attention back to your breath
      - Practice for just 5 minutes between classes or study sessions
      
      ## 2. Body Scan
      - Starting from your toes and moving up to your head
      - Notice sensations without judgment
      - Consciously release tension in each area
      - Perfect for a quick reset when feeling overwhelmed
      
      ## 3. Five Senses Check-in
      - Notice 5 things you can see
      - Notice 4 things you can touch/feel
      - Notice 3 things you can hear
      - Notice 2 things you can smell
      - Notice 1 thing you can taste
      - This exercise grounds you in the present moment
      
      ## 4. Mindful Walking
      - Walk slowly, focusing on each step
      - Feel your feet touching the ground
      - Notice the movement of your body
      - Great between classes or buildings
      
      ## 5. One Mindful Task
      - Choose one daily activity (brushing teeth, showering, eating)
      - Perform it with complete attention
      - Notice textures, sounds, smells, and sensations
      
      Regular brief mindfulness practices can significantly reduce stress and improve focus.
    `,
    source: 'Mindfulness Association',
    sourceUrl: 'https://mindfulnessassociation.org',
    tags: ['meditation', 'quick', 'mindfulness', 'stress reduction'],
    timeToRead: '5 min'
  },
  {
    id: 4,
    title: 'Recognizing Depression in College Students',
    description: 'How to identify symptoms of depression and when to seek help',
    category: 'Depression',
    content: `
      Depression is common among college students but is often misunderstood or ignored. Understanding the signs can help you recognize when you or a friend might need support.
      
      ## Common Symptoms in Students
      - Persistent sadness or emptiness
      - Loss of interest in previously enjoyed activities
      - Changes in sleep patterns (insomnia or oversleeping)
      - Academic performance decline
      - Social withdrawal or isolation
      - Difficulty concentrating or making decisions
      - Unexplained physical complaints (headaches, digestive issues)
      - Fatigue and loss of energy
      - Feelings of worthlessness or guilt
      - Thoughts of death or suicide
      
      ## Depression vs. Normal Stress
      While stress is a normal part of college life, depression is different:
      - Stress is usually tied to specific events; depression often isn't
      - Stress typically resolves when the stressor is addressed; depression persists
      - Stress might affect mood temporarily; depression affects multiple aspects of life
      
      ## When and How to Seek Help
      Consider seeking professional help if:
      - Symptoms last more than two weeks
      - Daily functioning is impaired
      - You have thoughts of harming yourself
      
      Resources available to students include:
      - Campus counseling services
      - Student health centers
      - National mental health hotlines
      - Telehealth counseling options
      
      Remember that depression is treatable, and seeking help is a sign of strength, not weakness.
    `,
    source: 'American College Health Association',
    sourceUrl: 'https://www.acha.org',
    tags: ['depression', 'symptoms', 'mental health', 'help'],
    timeToRead: '8 min'
  },
  {
    id: 5,
    title: 'Building Healthy Relationships in College',
    description: 'Navigating social connections and setting boundaries',
    category: 'Relationships',
    content: `
      College is a time of forming new relationships and navigating social dynamics. Learning to build healthy connections is essential for wellbeing.
      
      ## Friendship Foundations
      - Authenticity: Be your genuine self rather than trying to fit in
      - Reciprocity: Healthy relationships involve give and take
      - Respect: Honor differences in opinions, backgrounds, and values
      - Communication: Express yourself honestly and listen actively
      
      ## Setting Boundaries
      - Identify your personal limits and communicate them clearly
      - Remember that saying "no" is sometimes necessary and healthy
      - Recognize when others' boundaries need to be respected
      - Understand that boundaries may change over time
      
      ## Navigating Conflict
      - Address issues directly rather than avoiding them
      - Focus on specific behaviors rather than personal attacks
      - Use "I" statements to express feelings
      - Be willing to compromise and find solutions
      
      ## Warning Signs of Unhealthy Relationships
      - Feeling drained after interactions
      - Pressure to change who you are
      - Disrespect for your boundaries
      - Controlling behaviors
      - Excessive jealousy
      
      Building a supportive social network takes time and effort, but quality relationships are one of the strongest predictors of wellbeing during college and beyond.
    `,
    source: 'Student Wellness Center',
    tags: ['relationships', 'social', 'boundaries', 'communication'],
    timeToRead: '6 min'
  },
  {
    id: 6,
    title: 'Effective Study Techniques Based on Cognitive Science',
    description: 'Science-backed methods to improve learning and retention',
    category: 'Study',
    content: `
      Modern cognitive science has revealed much about how we learn most effectively. These evidence-based techniques can help you study smarter, not harder.
      
      ## Spaced Repetition
      - Space out your study sessions over time rather than cramming
      - Review material at increasing intervals
      - Apps like Anki can help implement this technique
      
      ## Retrieval Practice
      - Test yourself regularly instead of just re-reading
      - Use flashcards, practice questions, or explain concepts aloud
      - The effort of recalling information strengthens memory
      
      ## Interleaving
      - Mix different subjects or problem types within a study session
      - Alternate between related topics rather than blocking one subject
      - This approach improves discrimination between concepts
      
      ## Elaboration
      - Connect new information to what you already know
      - Ask "why" and "how" questions about the material
      - Create examples and applications of concepts
      
      ## Concrete Examples
      - Relate abstract concepts to concrete examples
      - Create your own examples to deepen understanding
      - Use analogies to connect to familiar ideas
      
      ## Dual Coding
      - Combine verbal information with visuals
      - Create diagrams, mind maps, or sketches
      - This leverages multiple neural pathways for better recall
      
      ## The Pomodoro Technique
      - Work in focused 25-minute intervals followed by 5-minute breaks
      - Take a longer break (15-30 minutes) after 4 intervals
      - This maximizes attention and minimizes fatigue
      
      Implementing even a few of these techniques can significantly improve learning efficiency and retention.
    `,
    source: 'Learning Scientists',
    sourceUrl: 'https://www.learningscientists.org',
    tags: ['studying', 'learning', 'techniques', 'cognitive science'],
    timeToRead: '9 min'
  }
];

export const categories = [
  { id: 'stress', name: 'Stress Management', 
    description: 'Techniques and resources for managing stress in academic environments' },
  { id: 'sleep', name: 'Sleep', 
    description: 'Improving sleep quality for better mental and physical health' },
  { id: 'anxiety', name: 'Anxiety', 
    description: 'Understanding and coping with anxiety as a student' },
  { id: 'depression', name: 'Depression', 
    description: 'Recognizing signs of depression and finding support' },
  { id: 'mindfulness', name: 'Mindfulness', 
    description: 'Practicing present-moment awareness for mental wellbeing' },
  { id: 'relationships', name: 'Relationships', 
    description: 'Building and maintaining healthy social connections' },
  { id: 'study', name: 'Study Techniques', 
    description: 'Evidence-based approaches to effective learning' },
  { id: 'general', name: 'General Wellness', 
    description: 'Overall mental health maintenance and self-care' },
];