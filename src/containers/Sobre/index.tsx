import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, minus.
      Dicta molestiae doloribus suscipit est unde id eum nobis atque. Accusamus
      tempora pariatur corrupti blanditiis, quos eligendi quidem vero dolores?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=lucazmenezez&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=lucazmenezez&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
