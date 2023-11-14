import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementCallOut extends Schema.Component {
  collectionName: 'components_layout_call_outs';
  info: {
    displayName: 'CallOut';
    icon: 'atom';
    description: '';
  };
  attributes: {
    CallOut: Attribute.String;
    Type: Attribute.Enumeration<['Primary', 'Secondary']>;
  };
}

export interface ElementCard extends Schema.Component {
  collectionName: 'components_layout_cards';
  info: {
    displayName: 'Card';
    icon: 'address-card';
    description: '';
  };
  attributes: {
    Title: Attribute.Text;
    Text: Attribute.RichText;
    Type: Attribute.Enumeration<
      ['Standard', 'Side - left', 'Side - right', 'Bullet']
    >;
    Image: Attribute.Media;
  };
}

export interface ElementFaq extends Schema.Component {
  collectionName: 'components_element_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    Question: Attribute.Text;
    Answer: Attribute.RichText;
  };
}

export interface ElementHero extends Schema.Component {
  collectionName: 'components_element_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    Strap: Attribute.String;
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Text: Attribute.Text;
    Image: Attribute.Media;
    ButtonLabel: Attribute.String;
    ButtonLink: Attribute.String;
  };
}

export interface ElementReference extends Schema.Component {
  collectionName: 'components_element_references';
  info: {
    displayName: 'Reference';
    icon: 'adjust';
  };
  attributes: {
    project: Attribute.Relation<
      'element.reference',
      'oneToOne',
      'api::project.project'
    >;
  };
}

export interface ElementSocialMediaLink extends Schema.Component {
  collectionName: 'components_element_social_media_links';
  info: {
    displayName: 'SocialMediaLink';
  };
  attributes: {
    Name: Attribute.String;
    Link: Attribute.String;
    Icon: Attribute.Media;
  };
}

export interface ElementTestimonialCard extends Schema.Component {
  collectionName: 'components_element_testimonial_cards';
  info: {
    displayName: 'Testimonial';
    description: '';
  };
  attributes: {
    Testimonial: Attribute.Text & Attribute.Required;
    Name: Attribute.String & Attribute.Required;
    Avatar: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'element.call-out': ElementCallOut;
      'element.card': ElementCard;
      'element.faq': ElementFaq;
      'element.hero': ElementHero;
      'element.reference': ElementReference;
      'element.social-media-link': ElementSocialMediaLink;
      'element.testimonial-card': ElementTestimonialCard;
    }
  }
}
