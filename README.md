See Live project here: https://bemail.herokuapp.com/

The production artists in my department have to do a lot of repeatative 'find' & 'replace' tasks building HTML emails for schools. I had previously built a form that would automate the most common email we worked on (http://ss-email.herokuapp.com/) but it was basic javascript & HTML. You would punch in your values, hit submit & it would basically use FS to import the file, find the relevant bit of code & replace it with the values in the form fields. It worked. It wasn't perfect though:

1) I couldn't test my links
2) I couldn't visualize the email
3) There had to be different sites for each email. Since there are a lot of emails this was cumbersome. 

Since I wanted to be able to see values instantly & test links in real-time, I decided to rebuild the tool in React. Using 2 way binding & React's library solved my previous 3 issues:

1) All the links are now testable in the preview
2) There's a live preview
3) There's now one site for all of the emails

It works great & I can update it on the fly. Another bonus of using React here is that I can reuse components if there are sections from one email that are used in a previous, like the input fields. Those are all one component that have unique props to direct the binding. It works great & my team is happy to have a fast lane using this custom CMS.