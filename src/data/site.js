// Edit business details, services, hours and content here. No code changes needed elsewhere.
import { Wrench, Car, Truck, Activity, ClipboardList, Disc3, Cog, Snowflake, BatteryCharging, SearchCheck, Fuel } from 'lucide-react'

export const SITE = {
  name: 'Outback Motor Works',
  tagline: 'Keeping the Territory Moving.',
  phone: '0482 069 219',
  phoneHref: 'tel:+61482069219',
  email: 'info@outbackmotorworks.com.au', // MOCK - replace when the real address is available
  address: '4/5 Roni Court, Winnellie NT',
  mapsUrl: 'https://maps.app.goo.gl/MBq8NJPcLjnnBzrHA',
  mapEmbed: 'https://www.google.com/maps?q=-12.4296525,130.8927866&z=16&output=embed',
  reviewUrl: 'https://www.google.com/maps/place/Outback+Motor+Works/@-12.4296525,130.8902117,17z/data=!4m8!3m7!1s0x2cc09790bb107351:0x148c3677a28aef51!8m2!3d-12.4296525!4d130.8927866!9m1!1b1!16s%2Fg%2F11zwqqgwg9?entry=ttu&g_ep=EgoyMDI2MDkyNy4xIKXMDSoASAFQAw%3D%3D',
  facebook: 'https://www.facebook.com/profile.php?id=61594401012591',
  instagram: 'https://www.instagram.com/outback.motor.works/',
  rating: '5.0',
}

export const NAV = [['Home','home'],['Services','services'],['About','about'],['Gallery','gallery'],['Reviews','reviews'],['Book','book'],['Hours','hours'],['Contact','contact']]

// day: JS getDay() index (0 = Sunday)
export const HOURS = [
  [1,'Monday','8:00 am – 4:30 pm'],[2,'Tuesday','8:00 am – 4:30 pm'],[3,'Wednesday','8:00 am – 4:30 pm'],
  [4,'Thursday','8:00 am – 4:30 pm'],[5,'Friday','8:00 am – 4:30 pm'],[6,'Saturday','Closed'],[0,'Sunday','Closed'],
]

export const SERVICES = [
  { icon: Fuel, title: 'Petrol and Diesel', text: 'All makes and models. Petrol or diesel, we look after the lot.' },
  { icon: Wrench, title: 'Mechanical Repairs', text: 'Mechanical repairs in Winnellie, done properly the first time.' },
  { icon: Car, title: 'Car Servicing', text: 'Regular car servicing in Darwin to keep you on the road.' },
  { icon: Truck, title: '4WD Servicing', text: '4WD servicing in Darwin for work, touring and the tracks.' },
  { icon: Activity, title: 'Diagnostics', text: 'Modern vehicle diagnostics to find the real fault.' },
  { icon: ClipboardList, title: 'Logbook Servicing', text: 'Logbook servicing in Darwin that keeps your book up to date.' },
  { icon: Disc3, title: 'Brakes', text: 'Brake repairs in Darwin. Pads, rotors and a proper safety check.' },
  { icon: Cog, title: 'Suspension', text: 'Suspension repairs in Darwin for a straight, stable ride.' },
  { icon: Snowflake, title: 'Air Conditioning', text: 'Car air conditioning in Darwin. Stay cool through the Wet and the Dry.' },
  { icon: BatteryCharging, title: 'Batteries', text: 'Battery testing and car battery replacement in Darwin.' },
  { icon: SearchCheck, title: 'Pre-Purchase Inspections', text: 'Pre-purchase inspections in Darwin. Know what you are buying.' },
]

export const WHY = [
  ['Clear communication', 'We explain what is happening with your vehicle in simple terms.'],
  ['Quality workmanship', 'Professional servicing and repairs done properly.'],
  ['Honest advice', 'We recommend what your vehicle actually needs.'],
  ['Proper diagnostics', 'Modern equipment to find the real issue.'],
]

export const REVIEWS = [
  { name: 'Anon Christian', text: 'Recently got my car serviced by Outback Motor Works. Excellent service and friendly staff. I would highly recommend.' },
  { name: 'Piyush Gupta', text: 'Great service from Outback Motor Workshop. Friendly, professional, and reliable. They did a great job and kept me informed throughout. Highly recommended!' },
]

export const GALLERY = [
  ['gallery-1.jpg','Mechanic working on an engine with a ratchet'],['gallery-2.jpg','Engine oil top-up during a car service'],
  ['gallery-3.jpg','Diagnostic tablet connected to a vehicle'],['gallery-4.jpg','4WD suspension and brake inspection'],
  ['gallery-5.png','Handheld scan tool in the workshop'],['gallery-6.jpg','Brake pad replacement on a disc rotor'],
  ['gallery-7.jpg','Car air conditioning gas gauges'],['gallery-8.jpg','Logbook and keys at the service counter'],
  ['gallery-9.jpg','Battery testing under the bonnet'],['gallery-10.png','Why choose Outback Motor Works'],
].map(([f, alt]) => ({ src: `/images/${f}`, alt }))
