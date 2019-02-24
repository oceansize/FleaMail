import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Entry from './Entry';

Enzyme.configure({ adapter: new Adapter() });


describe('when content is available', () => {
  const fullEntry = {
            "author": "Michael Balzary",
            "date": "September 9, 2016",
            "recipient": "ak@rhcp.com",
            "subject": "One Hot Email",
            "body": "I'm a little pea. I love the sky and the trees."
          }
  const wrapper = shallow(<Entry entry={fullEntry} />);

  it('renders author content', () => {
    expect(wrapper.find('p.entry__author')).toHaveLength(1);
  });

  it('renders date content', () => {
    expect(wrapper.find('h2.entry__date')).toHaveLength(1);
  });

  it('renders recipient content', () => {
    expect(wrapper.find('p.entry__recipient')).toHaveLength(1);
  });

  it('renders subject content', () => {
    expect(wrapper.find('p.entry__subject')).toHaveLength(1);
  });

  it('renders body content', () => {
    expect(wrapper.find('p.entry__body')).toHaveLength(1);
  });
});

describe('when content is not available', () => {
  it('the whole component does not render if body is missing', () => {
    const missingBody = {
              "author": "Michael Balzary",
              "date": "September 9, 2016",
              "recipient": "ak@rhcp.com",
              "subject": "One Hot Email",
              "body": ""
            }
    const wrapper = shallow(<Entry entry={missingBody} />);
    expect(wrapper.hasClass('entry')).toBe(false)
  });

  it('does not render author content', () => {
    const missingAuthor = {
              "author": "",
              "date": "September 9, 2016",
              "recipient": "ak@rhcp.com",
              "subject": "One Hot Email",
              "body": "I'm a little pea. I love the sky and the trees."
            }
    const wrapper = shallow(<Entry entry={missingAuthor} />);
    expect(wrapper.find('p.entry__author')).toHaveLength(0);
  });

  it('does not render date content', () => {
    const missingDate = {
              "author": "Michael Balzary",
              "date": "",
              "recipient": "ak@rhcp.com",
              "subject": "One Hot Email",
              "body": "I'm a little pea. I love the sky and the trees."
            }
    const wrapper = shallow(<Entry entry={missingDate} />);
    expect(wrapper.find('p.entry__date')).toHaveLength(0);
  });

  it('does not render recipient content', () => {
    const missingRecipient = {
              "author": "Michael Balzary",
              "date": "September 9, 2016",
              "recipient": "",
              "subject": "One Hot Email",
              "body": "I'm a little pea. I love the sky and the trees."
            }
    const wrapper = shallow(<Entry entry={missingRecipient} />);
    expect(wrapper.find('p.entry__recipient')).toHaveLength(0);
  });

  it('does not render subject content', () => {
    const missingSubject = {
              "author": "Michael Balzary",
              "date": "September 9, 2016",
              "recipient": "ak@rhcp.com",
              "subject": "",
              "body": "I'm a little pea. I love the sky and the trees."
            }
    const wrapper = shallow(<Entry entry={missingSubject} />);
    expect(wrapper.find('p.entry__subject')).toHaveLength(0);
  });
});

