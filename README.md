import { Film } from '../film';

@Component({
selector: 'app-film-card',
template: `
<div class="card">
<div class="poster">
<img [src]="film.affiche" [alt]="film.title">
</div>
<div class="details">
<h2>{{ film.title }}</h2>
<p>{{ film.year }}</p>
<p>Metteur en scène: {{ film.director }}</p>
<p>Acteurs: {{ film.actors.join(', ') }}</p>
<div class="rating">
<app-film-rating [rating]="film.rating"></app-film-rating>
<span class="entrées">{{ film.entrees }} entrées</span>
</div>
</div>
</div>
`,
styles: [
`
.card {
display: flex;
flex-direction: row;
margin: 20px;
border-radius: 4px;
overflow: hidden;
width: 80%;
}
.poster {
width: 30%;
}
.poster img {
width: 100%;
height: 100%;
object-fit: cover;
}
.details {
padding: 20px;
width: 70%;
display: flex;
flex-direction: column;
justify-content: space-between;
}
.rating {
display: flex;
flex-direction: row;
align-items: center;
}
.rating app-film-rating {
margin-right: 10px;
}
.entrées {
font-size: 1.2em;
margin-left: auto;
}
`,
],
})
