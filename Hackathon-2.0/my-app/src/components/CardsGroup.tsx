import Cards from "./Cards"

export default function CardsGroup() {
  return (
    <>
    <div className="flex ml-10 mr-5 gap-3 my-7">
    <Cards
              carName=" Koenigsegg"
              carType="Sports"
              imageSrc="/Car (2).png"
              fuelCapacity={90}
              transmissionType="Manual"
              seats={2}
              rentPrice={90.00}
            />
            <Cards
              carName=" Nissan GT - R"
              carType="Sports"
              imageSrc="/Car (1).png"
              fuelCapacity={80}
              transmissionType="Manual"
              seats={2}
              rentPrice={80.00}
            />
            <Cards
              carName=" Rolls-Royce"
              carType="Sports"
              imageSrc="/Car.png"
              fuelCapacity={70}
              transmissionType="Manual"
              seats={4}
              rentPrice={96.00}
            />
 <Cards
              carName=" Nissan GT - R"
              carType="Sports"
              imageSrc="/Car (1).png"
              fuelCapacity={80}
              transmissionType="Manual"
              seats={2}
              rentPrice={80.00}
            />
    </div>
    </>
  )
}
