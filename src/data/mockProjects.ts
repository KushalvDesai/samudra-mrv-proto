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
    name: 'Andaman Coral Reef Restoration',
    location: 'Andaman and Nicobar Islands, India',
    coordinates: { lat: 11.7401, lng: 92.6586 },
    status: 'monitoring',
    area: 185.3,
    startDate: '2023-08-20',
    lastUpdate: '2024-01-12',
    creditsIssued: 1250,
    creditsAvailable: 680,
    ndviScore: 0.85,
    biodiversityIndex: 9.1,
    carbonSequestered: 78.4,
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
    name: 'Gulf of Mannar Seagrass Conservation',
    location: 'Tamil Nadu, India',
    coordinates: { lat: 9.0648, lng: 79.0186 },
    status: 'verified',
    area: 320.7,
    startDate: '2023-04-10',
    lastUpdate: '2024-01-14',
    creditsIssued: 1850,
    creditsAvailable: 920,
    ndviScore: 0.74,
    biodiversityIndex: 8.2,
    carbonSequestered: 94.3,
    images: [
      {
        id: 'img-004',
        url: '/api/placeholder/400/300',
        type: 'satellite',
        date: '2024-01-14',
        processed: true
      }
    ],
    verificationHistory: [
      {
        date: '2024-01-01',
        type: 'third_party',
        status: 'approved',
        notes: 'Marine Protected Area certification achieved'
      }
    ]
  },
  {
    id: 'proj-004',
    name: 'Chilika Lake Wetland Restoration',
    location: 'Odisha, India',
    coordinates: { lat: 19.7179, lng: 85.3240 },
    status: 'active',
    area: 540.2,
    startDate: '2023-02-15',
    lastUpdate: '2024-01-13',
    creditsIssued: 3200,
    creditsAvailable: 1580,
    ndviScore: 0.81,
    biodiversityIndex: 9.3,
    carbonSequestered: 187.6,
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
        type: 'site_visit',
        status: 'approved',
        notes: 'Migratory bird population recovery exceeding targets'
      }
    ]
  },
  {
    id: 'proj-005',
    name: 'Kerala Backwater Mangrove Enhancement',
    location: 'Kerala, India',
    coordinates: { lat: 9.9312, lng: 76.2673 },
    status: 'completed',
    area: 195.8,
    startDate: '2022-09-15',
    lastUpdate: '2023-12-20',
    creditsIssued: 2400,
    creditsAvailable: 0,
    ndviScore: 0.88,
    biodiversityIndex: 8.7,
    carbonSequestered: 142.3,
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
        notes: 'Project completed successfully. Coastal erosion reduced by 65%'
      }
    ]
  },
  {
    id: 'proj-006',
    name: 'Goa Coastal Dune Stabilization',
    location: 'Goa, India',
    coordinates: { lat: 15.2993, lng: 74.1240 },
    status: 'active',
    area: 75.4,
    startDate: '2023-06-01',
    lastUpdate: '2024-01-16',
    creditsIssued: 450,
    creditsAvailable: 380,
    ndviScore: 0.65,
    biodiversityIndex: 7.1,
    carbonSequestered: 32.8,
    images: [
      {
        id: 'img-007',
        url: '/api/placeholder/400/300',
        type: 'drone',
        date: '2024-01-15',
        processed: true
      }
    ],
    verificationHistory: [
      {
        date: '2023-12-10',
        type: 'remote_sensing',
        status: 'approved',
        notes: 'Native vegetation establishment successful'
      }
    ]
  },
  {
    id: 'proj-007',
    name: 'Mumbai Mangrove Conservation',
    location: 'Maharashtra, India',
    coordinates: { lat: 19.0760, lng: 72.8777 },
    status: 'monitoring',
    area: 280.6,
    startDate: '2023-07-20',
    lastUpdate: '2024-01-14',
    creditsIssued: 980,
    creditsAvailable: 750,
    ndviScore: 0.69,
    biodiversityIndex: 7.8,
    carbonSequestered: 68.2,
    images: [
      {
        id: 'img-008',
        url: '/api/placeholder/400/300',
        type: 'satellite',
        date: '2024-01-12',
        processed: true
      }
    ],
    verificationHistory: [
      {
        date: '2024-01-08',
        type: 'site_visit',
        status: 'pending',
        notes: 'Urban pollution impact assessment ongoing'
      }
    ]
  },
  {
    id: 'proj-008',
    name: 'Pulicat Lake Restoration',
    location: 'Andhra Pradesh, India',
    coordinates: { lat: 13.6667, lng: 80.3167 },
    status: 'pending',
    area: 420.1,
    startDate: '2024-01-05',
    lastUpdate: '2024-01-16',
    creditsIssued: 0,
    creditsAvailable: 0,
    ndviScore: 0.58,
    biodiversityIndex: 6.9,
    carbonSequestered: 15.7,
    images: [
      {
        id: 'img-009',
        url: '/api/placeholder/400/300',
        type: 'satellite',
        date: '2024-01-14',
        processed: true
      }
    ],
    verificationHistory: []
  },
  {
    id: 'proj-009',
    name: 'Lakshadweep Lagoon Protection',
    location: 'Lakshadweep, India',
    coordinates: { lat: 10.5667, lng: 72.6417 },
    status: 'verified',
    area: 155.3,
    startDate: '2023-01-15',
    lastUpdate: '2024-01-10',
    creditsIssued: 1680,
    creditsAvailable: 840,
    ndviScore: 0.92,
    biodiversityIndex: 9.6,
    carbonSequestered: 98.7,
    images: [
      {
        id: 'img-010',
        url: '/api/placeholder/400/300',
        type: 'drone',
        date: '2024-01-08',
        processed: true
      }
    ],
    verificationHistory: [
      {
        date: '2023-12-28',
        type: 'third_party',
        status: 'approved',
        notes: 'Coral health index improved by 45%'
      }
    ]
  },
  {
    id: 'proj-010',
    name: 'Kutch Salt Marsh Restoration',
    location: 'Gujarat, India',
    coordinates: { lat: 23.7337, lng: 68.7381 },
    status: 'active',
    area: 650.8,
    startDate: '2023-05-10',
    lastUpdate: '2024-01-15',
    creditsIssued: 2100,
    creditsAvailable: 1350,
    ndviScore: 0.67,
    biodiversityIndex: 8.1,
    carbonSequestered: 134.5,
    images: [
      {
        id: 'img-011',
        url: '/api/placeholder/400/300',
        type: 'satellite',
        date: '2024-01-13',
        processed: true
      }
    ],
    verificationHistory: [
      {
        date: '2023-11-15',
        type: 'site_visit',
        status: 'approved',
        notes: 'Flamingo nesting sites successfully established'
      }
    ]
  },
  {
    id: 'proj-011',
    name: 'Karwar Mangrove Plantation',
    location: 'Karnataka, India',
    coordinates: { lat: 14.8135, lng: 74.1292 },
    status: 'monitoring',
    area: 125.7,
    startDate: '2023-09-01',
    lastUpdate: '2024-01-12',
    creditsIssued: 520,
    creditsAvailable: 280,
    ndviScore: 0.71,
    biodiversityIndex: 7.5,
    carbonSequestered: 45.9,
    images: [
      {
        id: 'img-012',
        url: '/api/placeholder/400/300',
        type: 'drone',
        date: '2024-01-10',
        processed: false
      }
    ],
    verificationHistory: [
      {
        date: '2024-01-05',
        type: 'remote_sensing',
        status: 'pending',
        notes: 'Seedling survival rate assessment in progress'
      }
    ]
  },
  {
    id: 'proj-012',
    name: 'Pondicherry Coastal Restoration',
    location: 'Puducherry, India',
    coordinates: { lat: 11.9416, lng: 79.8083 },
    status: 'completed',
    area: 95.6,
    startDate: '2022-11-20',
    lastUpdate: '2023-11-30',
    creditsIssued: 1450,
    creditsAvailable: 0,
    ndviScore: 0.83,
    biodiversityIndex: 8.4,
    carbonSequestered: 89.3,
    images: [
      {
        id: 'img-013',
        url: '/api/placeholder/400/300',
        type: 'satellite',
        date: '2023-11-25',
        processed: true
      }
    ],
    verificationHistory: [
      {
        date: '2023-11-30',
        type: 'site_visit',
        status: 'approved',
        notes: 'Coastal erosion completely halted, turtle nesting resumed'
      }
    ]
  }
];

export const mockNotifications = [
  {
    id: 'notif-001',
    type: 'verification_due',
    project: 'Andaman Coral Reef Restoration',
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
    project: 'Gulf of Mannar Seagrass Conservation',
    message: '920 carbon credits ready for issuance',
    priority: 'high',
    date: '2024-01-14'
  },
  {
    id: 'notif-004',
    type: 'anomaly_detected',
    project: 'Pulicat Lake Restoration',
    message: 'Unusual growth patterns detected in sector B-3',
    priority: 'medium',
    date: '2024-01-13'
  },
  {
    id: 'notif-005',
    type: 'milestone_achieved',
    project: 'Chilika Lake Wetland Restoration',
    message: 'Migratory bird count exceeded by 200%',
    priority: 'high',
    date: '2024-01-12'
  },
  {
    id: 'notif-006',
    type: 'weather_alert',
    project: 'Mumbai Mangrove Conservation',
    message: 'Monsoon impact assessment scheduled',
    priority: 'medium',
    date: '2024-01-11'
  }
];

export const dashboardStats = {
  totalProjects: 12,
  activeProjects: 4,
  totalCreditsIssued: 18730,
  totalCarbonSequestered: 1113.5,
  averageNdvi: 0.75,
  projectsAwaitingVerification: 4
};