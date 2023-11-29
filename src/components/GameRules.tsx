import { GUESS_SIZE, MAX_ALLOWED_GUESSES } from '../logic/constants';

const GameRules: React.VFC = () => {
  return (
    <>
      <h3 className="font-medium">Ціль</h3>
      <p>
        Вибрано секретну комбінацію з {GUESS_SIZE} кольорів, і вам потрібно вгадати цю комбінацію за{' '}
        {MAX_ALLOWED_GUESSES} або менше спроб, щоб перемогти.
      </p>

      <h3 className="font-medium mt-2">Як грати?</h3>
      <p>
        Зверху вниз у кожному рядку клацайте по кружечку та обирайте колір. Заповнивши всі кружечки
        підряд, ви можете перевірити свою припущення.
      </p>
      <ul className="list-disc list-inside my-2">
        <li>Зелене коло означає, що колір і положення правильні.</li>
        <li>Помаранчеве коло означає, що колір існує в комбінації, але позиція не правильна.</li>
        <li>Порожній кружечок означає, що кольору в комбінації немає взагалі.</li>
      </ul>
    </>
  );
};

export default GameRules;
