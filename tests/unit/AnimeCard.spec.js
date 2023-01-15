import { shallowMount , createLocalVue  } from '@vue/test-utils'
import AnimeCard from '@/components/AnimeCard.vue'
describe('AnimeCard', () => {
    let wrapper
    const anime = {
      title: 'Naruto',
      main_picture: 'https://example.com/naruto.jpg'
    }
  
    beforeEach(() => {
        wrapper = shallowMount(AnimeCard, {
            propsData: { anime }
          })
    })
  
    it('displays the anime title', () => {
      expect(wrapper.text()).toContain(anime.title)
    })
  
    it('displays the anime main picture', () => {
      expect(wrapper.find('img').attributes('src')).toBe(anime.main_picture)
    })
  })