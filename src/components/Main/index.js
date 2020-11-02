import { useEffect, useState } from 'react';
import {
  differenceInDays,
  differenceInMonths,
  differenceInSeconds,
  getDate,
} from 'date-fns';
import { Container, Content, Footer } from './styles';
import { MdFavorite } from 'react-icons/md';
import Mensiversary from '../Mensiversary';

function Main() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [firstDay] = useState(new Date(2020, 8, 2));
  const [seconds, setSeconds] = useState(0);
  const [days, setDays] = useState(0);
  const [months, setMonths] = useState(0);
  const [dayOfMonth, setDayOfMonth] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    setSeconds(differenceInSeconds(currentDateTime, firstDay));
    setDays(differenceInDays(currentDateTime, firstDay));
    setMonths(differenceInMonths(currentDateTime, firstDay));
    setDayOfMonth(getDate(currentDateTime));
  }, [currentDateTime, firstDay]);

  return (
    <Container>
      {dayOfMonth === 2 && <Mensiversary mensiversaryDay={months} />}
      <Content>
        <h1>
          <span>Hoje faz </span> <strong>{days} dias</strong>
          <span> que GaBea é real</span>
        </h1>
        <h2>
          Mais precisamente{' '}
          {Intl.NumberFormat('pt-BR', { style: 'decimal' }).format(seconds)}{' '}
          segundos de muito amor
        </h2>
      </Content>
      <Footer>
        <p>
          Made with
          <MdFavorite /> by{' '}
          <a href="https://twitter.com/ezrealblindado">
            Gabriel <span>🦔</span>
          </a>{' '}
          · Dedicated to{' '}
          <a href="https://twitter.com/beascoitinho">
            Beatriz <span>🍪</span>
          </a>{' '}
        </p>
      </Footer>
    </Container>
  );
}

export default Main;
