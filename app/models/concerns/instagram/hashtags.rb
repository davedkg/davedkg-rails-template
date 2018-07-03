module Instagram::Hashtags 
  extend ActiveSupport::Concern
  
  # https://www.instagram.com/explore/tags/steereo/
  HASHTAG_SEARCH_URL = 'https://www.instagram.com/explore/tags/'
  
  def search_by_hashtag(hashtag)
    post_urls = []
    status    = browser.visit HASHTAG_SEARCH_URL + hashtag + '/'
    
    # TODO handle status
    
    # TODO handle paging
    browser.find('article').all('a').each do |anchor|
      post_urls << anchor['href']
    end
    
    post_urls
  end
  
end