'use strict';

var movies = [
        {
          id: 1,
          title: 'Hobbit',
          desc: 'O niziołkach, czarodziejach, elfach, orkach itp.',
          poster: 'img/hobbit.jpg'
        },
        {
          id: 2,
          title: 'Król Lew',
          desc: 'Film animowany o królu sawanny.',
          poster: 'img/krol_lew.jpg'
        },
        {
          id: 3,
          title: 'Avengers',
          desc: 'Film o superbohaterach.',
          poster: 'img/avengers.jpg'
        },
        {
          id: 4,
          title: 'Iron Man',
          desc: 'Film o superbohaterze.',
          poster: 'img/ironman.jpg'
        }
       ];

/********* MOVIE TITLE ***************/
    var MovieTitle = React.createClass({
      propTypes: {
        title: React.PropTypes.string.isRequired,
      },
      render: function() {
        return (
          React.createElement('h2', {}, this.props.title)
        )
      }
    })

/********* MOVIE DESC ***************/
    var MovieDesc = React.createClass({
      propTypes: {
        description: React.PropTypes.string.isRequired,
      },
      render: function() {
        return (
          React.createElement('p', {}, this.props.description)
        )
      }
  })

/********* MOVIE ***************/
    var Movie = React.createClass({
      propTypes: {
        poster: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired
      },
      render: function() {
        return (
          React.createElement('li', {},
          React.createElement('img', { src: this.props.poster }),
          React.createElement(MovieTitle, { title: this.props.title }),
          React.createElement(MovieDesc, { description: this.props.desc })
          )
        )
      }
  })

/********* MOVIE LIST ***************/
    var MovieList = React.createClass({
      propTypes: {
        movies: React.PropTypes.array.isRequired,
      },
      render: function() {
        return (
          React.createElement('ul', {},
          movies.map(function(movie) {
            return React.createElement(Movie, { key: movie.id, poster: movie.poster, title: movie.title, desc: movie.desc })
          })
          )
        )
      }
    })


    var element =
      React.createElement('div', {},
      React.createElement('h1', {}, 'Lista filmów'),
      React.createElement(MovieList, { movies: movies})
      );


ReactDOM.render(element, document.getElementById('app'));
