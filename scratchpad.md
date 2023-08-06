# Sat Aug 5 01:52:21 AM UTC 2023

## Getting organized

I'm getting overwhelmed with tabs, and too many open programs and things,

So I'm getting too far along with out documentting what's even going on...

So I'd like to write a piece of software to handle that,

So really its a bunch of links

But I'm not real sure how to organize them, and put them together in a way that is useful to me. I save them because at some point in the future I'll want to recall that information, and not find something that is 'similar' because the quality is usually lower, than what I had found the first time.

pokemon sapphire japanese script
https://community.wanikani.com/t/want-to-play-pokemon/36545
https://www.gamegrammar.com/

https://mazii.net/en-US/search/word/javi/%E3%83%83
https://ja.hinative.com/questions/5066807
how to type small シ
how to write small katakana

https://github.com/rbenv/rbenv
https://stackoverflow.com/questions/51126403/you-dont-have-write-permissions-for-the-library-ruby-gems-2-3-0-directory-ma
you don't have write permissions for the /library/ruby/gems/2.6.0 directory
pokemon japanese pixel font
https://github.com/rbenv/rbenv
rbenv
https://www.reddit.com/r/rails/comments/f009mb/there_are_two_ruby_version_manager_rvm_vs_rbenv/
rvm is trash
you don't have write permissions for the /var/lib/gems/3.0.0 directory

You can see I have a collection of link above,

```js
{
  queryString: "",
  related_queries: [{ queryString: ''}, {queryString: ''}]
  meta_data: {
    createdAt: 'new Date().valueOf'
    completed: false
  }
  visited_pages: [
    {
      title: "",
      url: "",
      createdAt: ""
    }
  ],
  related_resources: [{
    url: '',
    description: ''
  }, {
    url: '',
    description: ''
  }]
}
```

We'll take a step back and see how our above structure works out with a simple example

query_string = "grep"

Which returns a SERP (Search Engine Resutls Page) which is a collection of urls and information, about the input query string.

which leads me here...

https://www.gnu.org/software/grep/manual/grep.html#:~:text=grep%20searches%20the%20named%20input,grep%20searches%20the%20working%20directory%20.

Open that page there is a term that I haven't seen before called basic regular expressions (BREs)

We can call this something like a text_fragment

query_string: "grep",
visited_pages = [{
url: "https://www.gnu.org/software/grep/manual/grep.html#:~:text=grep%20searches%20the%20named%20input,grep%20searches%20the%20working%20directory%20.",
visited_at: 1691201740027,
text_fragments: [
{
fragment: "basic regular expressions (BREs)",
createdAt:
}
]

}]

What should happen now, that I want to query a text fragment?

query: {
sub_queries: this.visited_pages[0].text_fragments[0] // Which we can give it an ID
}

query = {
...
sub_queries: [0101FRIAUG41020PM]
}

query = "first chrome extension"
