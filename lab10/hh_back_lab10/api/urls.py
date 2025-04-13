from django.urls import path
from . import views

urlpatterns = [
    
    path('companies/', views.company_list, name='company_list'),
    path('companies/<int:pk>/', views.company_detail, name='company_detail'),
    path('vacancies/', views.vacancy_list, name='vacancy_list'),
    path('vacancies/<int:pk>/', views.vacancy_detail, name='vacancy_detail'),

    
    path('companies_cbv/', views.CompanyListView.as_view(), name='company_list_cbv'),
    path('companies_cbv/<int:pk>/', views.CompanyDetailView.as_view(), name='company_detail_cbv'),
    path('vacancies_cbv/', views.VacancyListView.as_view(), name='vacancy_list_cbv'),
    path('vacancies_cbv/<int:pk>/', views.VacancyDetailView.as_view(), name='vacancy_detail_cbv'),
]

