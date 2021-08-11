import { memo } from "react";
import { isEqual } from 'lodash'

import { Button } from "./Button"

import '../styles/sidebar.scss';

type Genre = {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
interface SideBarProps {
  genres: Genre[];
  selectedGenreId: number;
  handleGenreChanged: (genreId: number) => void;
}

function SideBarComponent(props: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleGenreChanged(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}

export const SideBar = memo(SideBarComponent, (prevProps, nextProps) => {
  return (prevProps.selectedGenreId === nextProps.selectedGenreId) &&
    isEqual(prevProps.genres, nextProps.genres)
})