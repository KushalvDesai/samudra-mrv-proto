export interface Project {
  id: string;
  name: string;
  location: string;
  coordinates: { lat: number; lng: number };
  status: 'active' | 'pending' | 'verified' | 'monitoring' | 'completed';
  area: number; // in hectares
  startDate: string;
  lastUpdate: string;
  creditsIssued: number;
  creditsAvailable: number;
  ndviScore: number;
  biodiversityIndex: number;
  carbonSequestered: number; // in tons
  images: Array<{
    id: string;
    url: string;
    type: 'drone' | 'satellite';
    date: string;
    processed: boolean;
  }>;
  verificationHistory: Array<{
    date: string;
    type: 'site_visit' | 'remote_sensing' | 'third_party';
    status: 'approved' | 'rejected' | 'pending';
    notes: string;
  }>;
}

export const mockProjects: Project[] = [
  {
    id: 'proj-001',
    name: 'Sundarbans Mangrove Restoration',
    location: 'West Bengal, India',
    coordinates: { lat: 21.9497, lng: 88.2745 },
    status: 'active',
    area: 450.5,
    startDate: '2023-03-15',
    lastUpdate: '2024-01-15',
    creditsIssued: 2850,
    creditsAvailable: 1200,
    ndviScore: 0.72,
    biodiversityIndex: 8.4,
    carbonSequestered: 125.8,
    images: [
      {
        id: 'img-001',
        url: '/api/placeholder/400/300',
        type: 'drone',
        date: '2024-01-10',
        processed: true
      },
      {
        id: 'img-002',
        url: '/api/placeholder/400/300',
        type: 'satellite',
        date: '2024-01-15',
        processed: true
      }
    ],
    verificationHistory: [
      {
        date: '2023-12-15',
        type: 'site_visit',
        status: 'approved',
        notes: 'Excellent progress on mangrove seedling survival rate (94%)'
      }
    ]
  },
  {
    id: 'proj-002',
    name: 'Coral Reef Regeneration - Maldives',
    location: 'North Malé Atoll, Maldives',
    coordinates: { lat: 4.2105, lng: 73.2207 },
    status: 'monitoring',
    area: 125.2,
    startDate: '2023-08-20',
    lastUpdate: '2024-01-12',
    creditsIssued: 890,
    creditsAvailable: 450,
    ndviScore: 0.85,
    biodiversityIndex: 9.1,
    carbonSequestered: 45.2,
    images: [
      {
        id: 'img-003',
        url: '/api/placeholder/400/300',
        type: 'drone',
        date: '2024-01-08',
        processed: false
      }
    ],
    verificationHistory: [
      {
        date: '2024-01-05',
        type: 'remote_sensing',
        status: 'pending',
        notes: 'Awaiting underwater drone assessment results'
      }
    ]
  },
  {
    id: 'proj-003',
    name: 'Seagrass Meadow Protection',
    location: 'Great Barrier Reef, Australia',
    coordinates: { lat: -18.2871, lng: 147.6992 },
    status: 'pending',
    area: 280.7,
    startDate: '2024-01-05',
    lastUpdate: '2024-01-14',
    creditsIssued: 0,
    creditsAvailable: 0,
    ndviScore: 0.68,
    biodiversityIndex: 7.8,
    carbonSequestered: 12.5,
    images: [
      {
        id: 'img-004',
        url: '/api/placeholder/400/300',
        type: 'satellite',
        date: '2024-01-14',
        processed: true
      }
    ],
    verificationHistory: []
  },
  {
    id: 'proj-004',
    name: 'Kelp Forest Restoration',
    location: 'Monterey Bay, California',
    coordinates: { lat: 36.6002, lng: -121.8947 },
    status: 'verified',
    area: 340.1,
    startDate: '2023-05-10',
    lastUpdate: '2024-01-13',
    creditsIssued: 1850,
    creditsAvailable: 920,
    ndviScore: 0.78,
    biodiversityIndex: 8.9,
    carbonSequestered: 89.3,
    images: [
      {
        id: 'img-005',
        url: '/api/placeholder/400/300',
        type: 'drone',
        date: '2024-01-11',
        processed: true
      }
    ],
    verificationHistory: [
      {
        date: '2023-11-20',
        type: 'third_party',
        status: 'approved',
        notes: 'Verra standard VCS certification achieved'
      }
    ]
  },
  {
    id: 'proj-005',
    name: 'Coastal Wetland Enhancement',
    location: 'Chesapeake Bay, Maryland',
    coordinates: { lat: 39.0458, lng: -76.6413 },
    status: 'completed',
    area: 195.8,
    startDate: '2022-09-15',
    lastUpdate: '2023-12-20',
    creditsIssued: 3200,
    creditsAvailable: 0,
    ndviScore: 0.91,
    biodiversityIndex: 9.5,
    carbonSequestered: 156.7,
    images: [
      {
        id: 'img-006',
        url: '/api/placeholder/400/300',
        type: 'satellite',
        date: '2023-12-15',
        processed: true
      }
    ],
    verificationHistory: [
      {
        date: '2023-12-20',
        type: 'site_visit',
        status: 'approved',
        notes: 'Project completed successfully. Final verification passed.'
      }
    ]
  }
];

export const mockNotifications = [
  {
    id: 'notif-001',
    type: 'verification_due',
    project: 'Coral Reef Regeneration - Maldives',
    message: 'Site verification required within 7 days',
    priority: 'high',
    date: '2024-01-16'
  },
  {
    id: 'notif-002',
    type: 'processing_complete',
    project: 'Sundarbans Mangrove Restoration',
    message: 'Latest drone imagery processing completed',
    priority: 'medium',
    date: '2024-01-15'
  },
  {
    id: 'notif-003',
    type: 'credits_ready',
    project: 'Kelp Forest Restoration',
    message: '920 carbon credits ready for issuance',
    priority: 'high',
    date: '2024-01-14'
  },
  {
    id: 'notif-004',
    type: 'anomaly_detected',
    project: 'Seagrass Meadow Protection',
    message: 'Unusual growth patterns detected in sector B-3',
    priority: 'medium',
    date: '2024-01-13'
  }
];

export const dashboardStats = {
  totalProjects: 24,
  activeProjects: 18,
  totalCreditsIssued: 45680,
  totalCarbonSequestered: 2847.3,
  averageNdvi: 0.78,
  projectsAwaitingVerification: 6
};