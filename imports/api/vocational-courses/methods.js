'use strict';

import { Meteor } from 'meteor/meteor';
import { VocationalCourses } from './collection';
import { VOCATIONAL_COURSE } from '../../ui/config';

Meteor.methods({
  [`${VOCATIONAL_COURSE}.insert`]: (vocationalCouse) => {

    const newVocationalCouse = {
      name: vocationalCouse.name,
      description: vocationalCouse.description,
      price: vocationalCouse.price,
      duration: vocationalCouse.duration,
      shift: vocationalCouse.shift,
      timetable: vocationalCouse.timetable,
      period: vocationalCouse.period,
      requirement: vocationalCouse.requirement,
      promoterName: vocationalCouse.promoterName,
      promoterPhone: vocationalCouse.promoterPhone,
      promoterEmail: vocationalCouse.promoterEmail,
      createdAt: new Date()
    };

    return VocationalCourses.insert(newVocationalCouse);
  }

  [`${VOCATIONAL_COURSE}.remove`]: ({ _id }) => {

    return VocationalCourses.remove({ _id });
  }

  [`${VOCATIONAL_COURSE}.update`]: (vocationalCouse) => {

    return VocationalCourses.update(vocationalCouse);
  }
});
