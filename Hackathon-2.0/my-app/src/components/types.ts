interface carDetailsProps{
    carName: string; // Name of the car
  carType: string; // Type of car (e.g., Sports, SUV, etc.)
  imageSrc: string; // Path to the car image
  fuelCapacity: number; // Fuel capacity in liters
  transmissionType: string; // Transmission type (e.g., Manual, Automatic)
  seats: number; // Number of seats
  rentPrice: number; // Rent price per day

}

interface HeaderProps {
    profilePic: React.ReactElement<HTMLImageElement>
    ;
  }