import { reveal } from 'src/directives/reveal'

export default ({ app }) => {
  app.directive('reveal', reveal)
}