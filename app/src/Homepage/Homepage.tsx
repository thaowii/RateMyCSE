import React from 'react';
import {useNavigate} from 'react-router-dom';
import {GetDefaultRoute} from '../Helpers/utils';

type LayoutProps = {
    children: React.ReactNode;
}

export const HomeLayout: React.FC<LayoutProps> = ( props: LayoutProps ) => {
    return (
        <div className='homelayout'>
            <Header>
                <Logo/>
            </Header>
            <Sidebar>
                <LevelTab classlevel='Home'/>
                <LevelTab classlevel='CSE 100s'/>
                <LevelTab classlevel='CSE 300s'/>
                <LevelTab classlevel='CSE 400s'/>
                <LevelTab classlevel='CSE 500s'/>
            </Sidebar>
            {props.children}
        </div>
    );
}

type HeaderProps = {
  children: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ( props: HeaderProps ) => {
  return (
      <div className="header">
          {props.children}
      </div>
  );
}

export const Logo: React.FC = () => {
    
  const handleClick = () => {};
  
  return (
      <h1 className="logo" onClick={ handleClick }>
          RateMyCSE
      </h1>
  );
}

type SidebarProps = {
    children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ( props: SidebarProps ) => {
    return (
        <div className="sidebar">
            {props.children}
        </div>
    );
}

export const GetClassNumber = ( label : string ) => {
    return label.split(" ", 2)[1];
}

export const LevelTab: React.FC<{ classlevel: string }> = ({ classlevel }) => {   
    const navigate = useNavigate();
    
    const handleClick = () => {
        if (classlevel === 'Home') {
            // Default route
            navigate('/' + GetDefaultRoute() + '/');
        } else {
            // Gets 'X00s' from 'CSE X00s' classlevel and routes to that page
            navigate('/' + GetDefaultRoute() + '/cse' + GetClassNumber(classlevel));
        }
    };
    
    return (
        <button className="leveltab" data-testid={`levelTab-${classlevel}`}
                onClick={ handleClick }
        >
            {classlevel}
        </button>
    );
}

/* 
  Template for the rating boxes.

  Parameters:
  label - Text in the center of the box.
  rating - Determines the color and position of the box 
           (Difficulty, workload, practicality).
*/
const RatingBox: React.FC<{label: string, rating: string}> = ({ label, rating }) => {
  const dynamicclassname = `ratingbox ratingbox-${rating}`;

  return (
    <div className={dynamicclassname}>
      {label}
    </div>
  );
};

type RatingDescProps = {
  children: React.ReactNode;
}

/*
  Template for the descriptions underneath the rating boxes that accepts
  children as the text for the description.
*/
export const RatingDesc: React.FC<RatingDescProps> = ( props: RatingDescProps ) => {
  
  return (
      <div className="ratingdesc">
          {props.children}
      </div>
  );
}

export const InnerPage: React.FC = () => {
    return (
        <div className="innerpage">
          <h1 className="welcome">
            Welcome to RateMyCSE
          </h1>
          <h3>Wondering if a UW CSE class is as hard as they say?</h3>
          <div className="howitworks">
            <h2>How it works:</h2>
            <h3 className="explanation">
              Students will post ratings based on 3 categories
            </h3>
            <div className="ratingsflexbox">
              <RatingBox label="Difficulty" rating="diff" />
              <RatingBox label="Workload" rating="work" />
              <RatingBox label="Practicality" rating="prac" />
            </div>
            <div className="ratingsflexbox">
              <RatingDesc>
                A combination of how hard the class material was to 
                understand and how much effort the class takes to
                pass.
              </RatingDesc>
              <RatingDesc>
                Based on how much homework there is and how long the 
                homework takes.
              </RatingDesc>
              <RatingDesc>
                How useful is this class in the real world? Have you
                seen the material in the industry?
              </RatingDesc>
            </div>
          </div>
        </div>
    );
}
