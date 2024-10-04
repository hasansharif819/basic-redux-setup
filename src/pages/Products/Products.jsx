import { useGetPostsQuery } from "../../redux/api/baseApi"

const Products = () => {

  const {data: products, isLoading} = useGetPostsQuery()

  return (
    <div>
      <h1 className="text-5xl">Products {products?.length}</h1>
    </div>
  )
}

export default Products