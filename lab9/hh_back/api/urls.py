from django.urls import path
from .views import ( CompanyListView, CompanyDetailView, CompanyVacanciesView, VacancyListView, VacancyDetailView, TopTenVacancies)

urlpatterns = [
    path('companies/', CompanyListView.as_view()),
    path('companies/<int:id>/', CompanyDetailView.as_view()),
    path('companies/<int:id>/vacancies/',CompanyVacanciesView.as_view()),
    path('vacancies/', VacancyListView.as_view()),
    path('vacancies/<int:id>/', VacancyDetailView.as_view()),
    path('vacancies/top-ten/', TopTenVacancies.as_view())
]
