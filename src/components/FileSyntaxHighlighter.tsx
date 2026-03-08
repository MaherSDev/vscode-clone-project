import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IProps {
  content: string;
}

const FileSyntaxHighlighter = ({ content }: IProps) => {
  return (
    <SyntaxHighlighter language="javascript" style={docco} showLineNumbers>
      {String(content)}
    </SyntaxHighlighter>
  );
};

export default FileSyntaxHighlighter;