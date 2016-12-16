'use strict';

import { Meteor } from 'meteor/meteor';
import { Jobs } from './collection';
import { JOB } from '../../ui/config';

Meteor.methods({
  [`${JOB}.insert`]: (job) => {
    const newJob = {
      name: job.name,
      description: job.description,
      salary: job.salary,
      contractType: job.contractType,
      demands: job.demands,
      benefits: job.benefits,
      workingHours: job.workingHours,
      companyName: job.companyName,
      companyPhone: job.companyPhone,
      companyEmail: job.companyEmail,
      createdAt: new Date()
    };

    return Jobs.insert(newJob);
  }

  [`${JOB}.remove`]: ({ _id }) => {

    return Jobs.remove({ _id });
  }

  [`${JOB}.update`]: (job) => {

    return Jobs.update(job);
  }
});
