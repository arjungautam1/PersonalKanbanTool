package com.personalkanban.pkt.service;

import com.personalkanban.pkt.model.Project;
import com.personalkanban.pkt.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project project)
    {
        //Logic

        return projectRepository.save(project);
    }
}
