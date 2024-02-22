
import style from './styles.css'

export default function ConferenceLayout({ children }) {
    return (
      <>
        <head style={style.header}>
            <h1>This Layout Component</h1>
        </head>
        <section>{children}</section>
      </>
    );
  }