import { isTeaser } from "@/libs/utils"
import { Main, Teaser } from "@/components"

const Home = () => {
    return !isTeaser ? <Main /> : <Teaser />;
}

export default Home;
