import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const salesData = [
  { name: 'Olivia Martin', email: 'olivia.martin@email.com', amount: '+$1,999.00', fallback: 'OM', avatar: '/avatars/01.png' },
  { name: 'Jackson Lee', email: 'jackson.lee@email.com', amount: '+$39.00', fallback: 'JL', avatar: '/avatars/02.png' },
  { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: '+$299.00', fallback: 'IN', avatar: '/avatars/03.png' },
  { name: 'William Kim', email: 'will@email.com', amount: '+$99.00', fallback: 'WK', avatar: '/avatars/04.png' },
  { name: 'Sofia Davis', email: 'sofia.davis@email.com', amount: '+$39.00', fallback: 'SD', avatar: '/avatars/05.png' },
  { name: 'Alexander Johnson', email: 'alex.j@email.com', amount: '+$150.50', fallback: 'AJ' },
  { name: 'Mia Garcia', email: 'mia.g@email.com', amount: '+$499.00', fallback: 'MG' },
  { name: 'Benjamin Rodriguez', email: 'ben.r@email.com', amount: '+$89.99', fallback: 'BR' },
  { name: 'Charlotte Martinez', email: 'charlie.m@email.com', amount: '+$1,200.00', fallback: 'CM' },
  { name: 'Ethan Hernandez', email: 'ethan.h@email.com', amount: '+$75.00', fallback: 'EH' },
  { name: 'Amelia Lopez', email: 'amelia.l@email.com', amount: '+$450.00', fallback: 'AL' },
  { name: 'James Wilson', email: 'james.w@email.com', amount: '+$1,500.00', fallback: 'JW' },
  { name: 'Evelyn Anderson', email: 'evelyn.a@email.com', amount: '+$5.00', fallback: 'EA' },
  { name: 'Logan Taylor', email: 'logan.t@email.com', amount: '+$250.00', fallback: 'LT' },
  { name: 'Harper Moore', email: 'harper.m@email.com', amount: '+$125.00', fallback: 'HM' },
];


export function RecentSales() {
  return (
    <div className="space-y-8">
      {salesData.map((sale, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            {sale.avatar && <AvatarImage src={sale.avatar} alt="Avatar" />}
            <AvatarFallback>{sale.fallback}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sale.name}</p>
            <p className="text-sm text-muted-foreground">
              {sale.email}
            </p>
          </div>
          <div className="ml-auto font-medium">{sale.amount}</div>
        </div>
      ))}
    </div>
  )
}