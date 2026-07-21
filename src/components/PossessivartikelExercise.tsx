import ClozeExercise from './ClozeExercise';
import { ClozeText } from '../types/cloze';

interface Props {
  texts: ClozeText[];
  onFinish: (score: number, total: number) => void;
  onHome: () => void;
}

export default function PossessivartikelExercise({ texts, onFinish, onHome }: Props) {
  return (
    <ClozeExercise
      topicLabel="Possessivartikel"
      texts={texts}
      onFinish={onFinish}
      onHome={onHome}
    />
  );
}
