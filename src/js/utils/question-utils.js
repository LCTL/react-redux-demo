import markdown from 'markdown-it';

const md = markdown({
  linkify: true,
  breaks: true
});

export const renderContent = content => md.render(content ? content : '');
