import { Request, Response } from 'express';
import ScheduleRule from '../models/ScheduleRule';
import ListScheduleRuleService from '../services/ListScheduleRuleService';
import ScheduleRuleRepository from '../repositories/ScheduleRuleRepository';

class ScheduleRuleController {
  index(request: Request, response: Response) {
    const listScheduleRules = new ListScheduleRuleService();

    const scheduleRules = listScheduleRules.execute();

    return response.status(200).json(scheduleRules);
  }

  store(request: Request, response: Response) {
    const { type, date, weekDays, timeInterval } = request.body;

    const scheduleRule = new ScheduleRule(type, timeInterval);

    const newScheduleRule = ScheduleRuleRepository.create(scheduleRule);

    response.json(newScheduleRule);
  }
}

export default new ScheduleRuleController();