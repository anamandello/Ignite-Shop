import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product"
import { useRouter } from "next/router"

export default function Product(){
  const { query } = useRouter()
  return(
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellat veritatis quis animi deserunt perspiciatis cumque molestiae obcaecati molestias esse consequatur temporibus, quisquam ratione in unde facere nesciunt! Accusamus, recusandae!</p>
        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}